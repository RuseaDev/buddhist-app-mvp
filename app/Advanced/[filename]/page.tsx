import { publicUrl } from "@/lib/supabase/storage";
import { notFound } from "next/navigation";

interface Props {params: {filename: string}}

export default function PDFViewerPage ({params}: Props) {
    const decoded = decodeURIComponent(params.filename);
    if (!decoded.toLowerCase().endsWith(".pdf")) notFound();

    const pdfUrl = publicUrl(`advanced/${decoded}`);

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <a href="/Advanced" className="text-blue-600 hover:text-blue-800">← Back to Advanced</a>
                <h1 className="text-2xl font-bold text-gray-900 mt-2">{decoded}</h1>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4">
                    <iframe
                        src={pdfUrl}
                        title={decoded}
                        className="w-full h-screen border-0"
                        style={{ minHeight: "80vh" }}
                    />
                </div>  
                <div className="mt-4 text-center">
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Open PDF in new tab
                    </a>
                </div>
            </div>
        </main>
    );
}

    