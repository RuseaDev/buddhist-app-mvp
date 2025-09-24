import { createClient } from "@/lib/supabase/client";

export default async function Page() {
const supabase = createClient();
const {data: now } = await supabase.rpc('now');
return <pre>Supabase ok. Server time: {JSON.stringify(now, null, 2)}</pre>
}       