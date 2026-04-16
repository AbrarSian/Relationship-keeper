import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f6f8f8] text-center px-4">
      <h1 className="text-6xl font-bold text-[#1f2937] drop-shadow-sm">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-[#374151]">Page Not Found</h2>
      <p className="mt-2 mb-8 text-[#6b7280] max-w-md">We couldn't find the page you were looking for. It might have been moved or doesn't exist.</p>
      <Link href="/" className="rounded-full bg-[#184d3d] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#163d32]">
        Return Home
      </Link>
    </div>
  );
}