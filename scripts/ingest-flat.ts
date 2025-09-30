// scripts/ingest-flat.ts
import { createClient } from "@supabase/supabase-js";
import { JSDOM } from "jsdom";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(url, service, { auth: { persistSession: false } });

function parseFileName(name: string) {
  // e.g. "dn.01.0.bodh.html"
  const [collection, number, , translatorCode] = name.split(".");
  return {
    workUid: `${collection.toUpperCase()}${number.padStart(2, "0")}`,
    translatorCode,
  };
}

function htmlToParagraphs(html: string) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  doc.querySelectorAll("script, style, nav, header, footer").forEach(el => el.remove());
  const blocks = Array.from(doc.querySelectorAll("p, li, blockquote, h1, h2, h3"))
    .map(el => el.textContent?.replace(/\s+/g, " ").trim() || "")
    .filter(Boolean);
  return blocks.length ? blocks : (doc.body?.textContent || html).split(/\n\s*\n/);
}

async function main() {
  const { data: files, error } = await supabase.storage.from("sutras").list("", { limit: 1000 });
  if (error) throw error;

  for (const f of files || []) {
    if (!f.name.endsWith(".html")) continue;

    const { workUid, translatorCode } = parseFileName(f.name);
    console.log(`→ Processing ${f.name} (${workUid}, ${translatorCode})`);

    // 1. download
    const { data: fileRes, error: dlErr } = await supabase.storage.from("sutras").download(f.name);
    if (dlErr) throw dlErr;
    const html = await fileRes.text();

    // 2. convert to paragraphs
    const paragraphs = htmlToParagraphs(html);

    // 3. insert into DB
    // (simplified: assumes you already made a work + edition row and know its ID)
    // For MVP: you can just store directly into `paragraphs` with a fake editionId
    const editionId = 1; // TODO: replace with lookup or insert

    // clear old
    await supabase.from("paragraphs").delete().eq("edition_id", editionId);

    const rows = paragraphs.map((body, i) => ({
      edition_id: editionId,
      seq: i + 1,
      anchor: `p${i + 1}`,
      body,
    }));

    for (let i = 0; i < rows.length; i += 500) {
      const { error } = await supabase.from("paragraphs").insert(rows.slice(i, i + 500));
      if (error) throw error;
    }

    console.log(`✓ ${f.name}: inserted ${rows.length} paragraphs`);
  }
}

main().catch(console.error);
