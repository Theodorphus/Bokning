"use client";

export default function AdminExportButton() {
  return (
    <a
      href="/admin/export"
      download
      className="flex items-center gap-2 rounded-lg border border-sand-200 bg-white px-4 py-2 text-sm font-medium text-choc-700 transition-colors hover:bg-sand-50"
    >
      <svg
        className="h-4 w-4 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Exportera CSV
    </a>
  );
}
