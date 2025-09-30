// app/Foundations/page.tsx
import { listByLevel } from "@/lib/supabase/storage";
import { TopicCard } from "@/app/components/ResourceCard";

function prettyTitle(filename: string) {
  const decoded = decodeURIComponent(filename);
  return decoded.replace(/\.pdf$/i, "").replace(/[-_]+/g, " ");
}

export default async function FoundationsPage() {
  const files = await listByLevel("foundation"); // ensure this matches your storage path

  return (
    <main className="px-4 sm:px-6 lg:px-12 xl:px-20">
      <section className="mx-auto max-w-7xl py-10 sm:py-12 lg:py-16">
        <h1 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-900/90">
          Foundations of Buddhist Teachings
        </h1>
        <p className="mt-3 text-center text-sm opacity-70">
          {files.length === 0 ? "No texts uploaded yet." : `${files.length} text(s)`}
        </p>
      </section>

      <section className="mx-auto max-w-7xl space-y-4">
        {files.map((f) => {
          const href = `/Foundations/${encodeURIComponent(f.name)}`;
          return (
            <TopicCard
              key={f.name}
              title={prettyTitle(f.name)}
              blurb="A selected sutra from the Foundations collection. Click to open the PDF reader."
              href={href}
            />
          );
        })}
      </section>
    </main>
  );
}
