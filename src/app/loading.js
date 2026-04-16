export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6f8f8]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#e5e7eb] border-t-[#184d3d]"></div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#184d3d]">Loading Data...</p>
      </div>
    </div>
  );
}