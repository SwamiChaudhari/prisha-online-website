import { ServiceDoc } from "@/data/services";

interface DocumentListProps {
  documents: ServiceDoc[];
}

export default function DocumentList({ documents }: DocumentListProps) {
  if (!documents || documents.length === 0) {
    return (
      <p className="text-gray-500 italic">
        Please contact us for document requirements.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {documents.map((doc, index) => (
        <div
          key={index}
          className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
        >
          {doc.required ? (
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
              ✓
            </span>
          ) : (
            <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm mt-0.5">
              ○
            </span>
          )}
          <div>
            <span className="font-medium text-gray-800">{doc.name}</span>
            {doc.required && (
              <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                Required
              </span>
            )}
            {!doc.required && (
              <span className="ml-2 text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
                Optional
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
