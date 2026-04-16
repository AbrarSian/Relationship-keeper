"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, ChartNoAxesColumn, House } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useInteractions } from "@/context/InteractionContext";
import { useMemo } from "react";

export default function Stats() {
    const { interactions, isLoaded } = useInteractions();

  const data = useMemo(() => {
    if (!isLoaded) return [];
    let textCount = 0;
    let callCount = 0;
    let videoCount = 0;

    interactions.forEach((item) => {
      if (item.type === "Text") textCount++;
      else if (item.type === "Call") callCount++;
      else if (item.type === "Video") videoCount++;
    });

    return [
      { name: "Text", value: textCount, color: "#8b5cf6" },
      { name: "Call", value: callCount, color: "#184d3d" },
      { name: "Video", value: videoCount, color: "#22c55e" },
    ].filter(d => d.value > 0);
  }, [interactions, isLoaded]);
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
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <Clock3 size={13} strokeWidth={2.1} />
            Timeline
          </Link>
          <Link
            href="/stats"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#184d3d] px-3.5 text-[12px] font-medium text-white"
          >
            <ChartNoAxesColumn size={13} strokeWidth={2.1} />
            Stats
          </Link>
        </nav>
      </div>

      <section className="mx-auto mt-16 max-w-5xl">
        <h1 className="text-3xl font-bold text-[#1f2937] md:text-[34px]">Friendship Analytics</h1>
        
        <div className="relative mb-10 mt-8 flex min-h-[440px] sm:p-8 flex-col relative rounded-[16px] border border-[#e2e8f0] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          <h2 className="text-[15px] font-semibold text-[#2f5346]">By Interaction Type</h2>
          
          <div className="-mt-6 flex flex-1 flex-col items-center justify-center">
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={105}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-6">
              {data.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[13px] font-medium text-[#64748b]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}