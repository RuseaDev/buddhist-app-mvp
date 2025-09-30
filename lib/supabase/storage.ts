import { createClient } from "./client";

const BUCKET = "dharma";

const pathMap = {
    foundation: "foundations",
    intermediate: "intermediate",
    advanced: "advanced",

} as const;

export async function listByLevel(level: keyof typeof pathMap) {
    const supabase = createClient();
    const folder = pathMap[level];
    const {data, error} = await supabase
    .storage
    .from(BUCKET)
    .list(folder, {limit: 100, sortBy: {column: "name", order: "asc"}})
    
    if (error) throw error;
    return data ?? [];

}   


export function publicUrl(path: string) {
    const supabase = createClient();
    return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
}
    
