import Image from "next/image";
import { ChartNoAxesColumn, Clock3, House, Plus } from "lucide-react";

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
      <section className="mx-auto mt-14 max-w-[1024px] rounded-[26px] bg-white px-8 py-12 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-[#2f5346]">KeenKeeper</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#111827] sm:text-5xl">Friends to keep close in your life</h1>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-7 text-[#6b7280]">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          <button
            type="button"
            className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-[#184d3d] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(24,77,61,0.18)] transition hover:bg-[#163d32]"
          >
            <Plus size={16} strokeWidth={3} />
            Add a Friend
          </button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[20px] border border-[#e5e7eb] bg-[#f8fafc] p-6 text-center shadow-sm">
            <p className="text-xs uppercase tracking-[0.26em] text-[#6b7280]">Total Friends</p>
            <p className="mt-4 text-3xl font-semibold text-[#111827]">10</p>
          </div>
          <div className="rounded-[20px] border border-[#e5e7eb] bg-[#effaf7] p-6 text-center shadow-sm">
            <p className="text-xs uppercase tracking-[0.26em] text-[#2f5346]">On Track</p>
            <p className="mt-4 text-3xl font-semibold text-[#111827]">3</p>
          </div>
          <div className="rounded-[20px] border border-[#e5e7eb] bg-[#fef3f2] p-6 text-center shadow-sm">
            <p className="text-xs uppercase tracking-[0.26em] text-[#b91c1c]">Need Attention</p>
            <p className="mt-4 text-3xl font-semibold text-[#111827]">6</p>
          </div>
          <div className="rounded-[20px] border border-[#e5e7eb] bg-[#eef2ff] p-6 text-center shadow-sm">
            <p className="text-xs uppercase tracking-[0.26em] text-[#3730a3]">Interactions This Month</p>
            <p className="mt-4 text-3xl font-semibold text-[#111827]">12</p>
          </div>
        </div>
      </section>
    </main>
  );
}