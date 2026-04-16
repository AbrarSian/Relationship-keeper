"use client";

import { Phone, MessageSquare, Video } from "lucide-react";
import { useInteractions } from "@/context/InteractionContext";
import Image from "next/image";

function getIcon(type) {
  if (type === "Video") return Video;
  if (type === "Text") return MessageSquare;
  return Phone;
}

export default function RecentInteractions({ friend }) {
  const { interactions, isLoaded } = useInteractions();

  // Filter interactions for this friend, or use fallback if none found
  const friendInteractions = isLoaded 
    ? interactions.filter((i) => i.person === friend.name).slice(0, 4)
    : [];

  return (
    <div className="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm font-semibold text-[#111827]">Recent Interactions</p>
        <button className="rounded-full border border-[#e5e7eb] bg-[#f8fafc] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#111827] transition hover:bg-[#eef2ff]">
          Full History
        </button>
      </div>
      <div className="mt-5 space-y-4">
        {friendInteractions.length > 0 ? (
          friendInteractions.map((interaction, index) => {
            const Icon = getIcon(interaction.type);
            return (
              <div key={index} className="flex flex-col items-start gap-4 rounded-[18px] border border-[#e5e7eb] bg-[#f8fafc] p-4 sm:flex-row sm:items-center">
                {interaction.isImage ? (
                   <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm overflow-hidden p-2.5">
                     <Image src={interaction.icon} alt={interaction.type} width={24} height={24} className="object-contain" />
                   </span>
                ) : (
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#153626] text-xl shadow-sm">
                    {interaction.icon}
                  </span>
                )}
                <div className="flex-1">
                  <p className="font-semibold text-[#111827]">{interaction.type}</p>
                  <p className="mt-1 text-sm text-[#6b7280]">Interaction with {interaction.person}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-[#9ca3af]">{interaction.date}</span>
              </div>
            );
          })
        ) : (
          <p className="text-sm text-[#6b7280]">No recent interactions recorded.</p>
        )}
      </div>
    </div>
  );
}