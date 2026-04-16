"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock3, ChartNoAxesColumn, ChevronDown, House } from "lucide-react";
import { useInteractions } from "@/context/InteractionContext";
import { useState } from "react";

export default function Timeline() {
const { interactions, isLoaded } = useInteractions();
  const [filter, setFilter] = useState("All");

  const filteredData = interactions.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  return (
    <main className="min-h-screen bg-[#f6f8f8] px-4 pb-16 pt-4 md:px-12 md:pb-24 md:pt-3.5">
      <div className="mx-auto flex flex-col w-full max-w-5xl items-start justify-between gap-4 sm:flex-row sm:gap-0">
        <Link href="/">
          <Image src="/logo.png" alt="KeenKeeper logo" width={141} height={32} priority />
        </Link>

        <nav className="flex items-center gap-0.5 rounded-[10px] border border-[#e5e7eb] bg-white p-1 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <Link
            href="/"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <House size={13} strokeWidth={2.2} />
            Home
          </Link>
          <Link
            href="/timeline"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#184d3d] px-3.5 text-[12px] font-medium text-white"
          >
            <Clock3 size={13} strokeWidth={2.2} />
            Timeline
          </Link>
          <Link
            href="/stats"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <ChartNoAxesColumn size={13} strokeWidth={2.1} />
            Stats
          </Link>
        </nav>
      </div>

      <section className="mx-auto mt-16 max-w-5xl">
        <h1 className="text-3xl font-bold text-[#1f2937] md:text-[34px]">Timeline</h1>
        
        <div className="relative mb-6 mt-6 flex w-full items-center justify-between rounded-lg border border-[#e5e7eb] bg-white px-4 py-1 text-sm text-[#6b7280] sm:w-[260px]">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full appearance-none bg-transparent py-2 outline-none cursor-pointer"
          >
            <option value="All">Filter timeline (All)</option>
            <option value="Meetup">Meetup</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
          <ChevronDown size={16} strokeWidth={2} className="pointer-events-none absolute right-4" />
        </div>

        <div className="flex flex-col gap-4">
          {isLoaded ? (
            filteredData.length > 0 ? (
              filteredData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 rounded-lg border border-[#f1f5f9] bg-white px-4 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:gap-5 sm:px-6"
                >
                  {item.isImage ? (
                    <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center drop-shadow-sm">
                      <Image src={item.icon} alt={item.type} width={28} height={28} className="object-contain" />
                    </div>
                  ) : (
                    <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center text-[26px] drop-shadow-sm">{item.icon}</span>
                  )}
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[15px]">
                      <span className="font-bold text-[#475569]">{item.type}</span>{" "}
                      <span className="text-[#64748b]">with {item.person}</span>
                    </p>
                    <p className="text-[13px] font-semibold text-[#94a3b8]">{item.date}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-[#6b7280]">No events found.</p>
            )
          ) : (
            <p className="text-[#6b7280]">Loading timeline...</p>
          )}
        </div>
      </section>
    </main>
  );
}