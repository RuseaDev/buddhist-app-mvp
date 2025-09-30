import { publicUrl } from "@/lib/supabase/storage";
import { notFound } from "next/navigation";

interface PDFViewerPageProps {
  params: {
    filename: string;
  };
}

export default async function PDFViewerPage({ params }: PDFViewerPageProps) {
  const { filename } = params;
  
  // Decode the filename in case it has special characters
  const decodedFilename = decodeURIComponent(filename);
  
  // Get the public URL for the PDF
  const pdfUrl = publicUrl(`foundations/${decodedFilename}`);
  
  // Basic validation - check if filename ends with .pdf
  if (!decodedFilename.toLowerCase().endsWith('.pdf')) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <a 
            href="/Foundations" 
            className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center"
          >
            ← Back to Foundations
          </a>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">
            {decodedFilename}
          </h1>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={pdfUrl}
            title={decodedFilename}
            className="w-full h-screen border-0"
            style={{ minHeight: '80vh' }}
          />
        </div>

        {/* Fallback for browsers that don't support iframe PDF viewing */}
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

