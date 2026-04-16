import Image from "next/image";
import { ChartNoAxesColumn, Clock3, House } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8f8] px-12 pt-3.5">
      <div className="mx-auto flex w-full max-w-[1024px] items-center justify-between">
        <Image src="/logo.png" alt="KeenKeeper logo" width={141} height={32} priority />

        <nav className="flex items-center gap-0.5 rounded-[10px] border border-[#e4e7ec] bg-white p-1 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#184d3d] px-3.5 text-[12px] font-medium text-white"
          >
            <House size={13} strokeWidth={2.2} />
            Home
          </button>
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <Clock3 size={13} strokeWidth={2.1} />
            Timeline
          </button>
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <ChartNoAxesColumn size={13} strokeWidth={2.1} />
            Stats
          </button>
        </nav>
      </div>
    </main>
  );
}