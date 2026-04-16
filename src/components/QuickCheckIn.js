"use client";

import { Phone, MessageSquare, Video } from "lucide-react";
import { useInteractions } from "@/context/InteractionContext";
import { useState } from "react";

export default function QuickCheckIn({ friend }) {
  const { addInteraction } = useInteractions();
  const [toastMessage, setToastMessage] = useState("");

  const handleInteract = (type) => {
    let icon, isImage;
    if (type === "Call") {
      icon = "/call.png";
      isImage = true;
    } else if (type === "Text") {
      icon = "/text.png";
      isImage = true;
    } else if (type === "Video") {
      icon = "/video.png";
      isImage = true;
    }
    
    const now = new Date();
    const dateString = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(now);

    addInteraction({
      type,
      icon,
      isImage,
      person: friend.name,
      date: dateString,
      timestamp: now.getTime(),
    });

    setToastMessage(`Logged ${type} with ${friend.name}`);
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <div className="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm relative">
      <p className="text-sm font-semibold text-[#111827]">Quick Check-In</p>
      
      {toastMessage && (
        <div className="fixed bottom-10 right-10 z-50 whitespace-nowrap rounded-lg bg-[#184d3d] px-5 py-3 text-sm font-medium text-white shadow-xl transition-all">
          {toastMessage}
        </div>
      )}

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <button
          onClick={() => handleInteract("Call")}
          className="inline-flex flex-col items-center justify-center gap-2 rounded-[18px] border border-[#e5e7eb] bg-[#f8fafc] px-4 py-6 text-sm font-semibold text-[#111827] transition hover:bg-[#eef2ff]"
        >
          <Phone size={18} />
          Call
        </button>
        <button
          onClick={() => handleInteract("Text")}
          className="inline-flex flex-col items-center justify-center gap-2 rounded-[18px] border border-[#e5e7eb] bg-[#f8fafc] px-4 py-6 text-sm font-semibold text-[#111827] transition hover:bg-[#eef2ff]"
        >
          <MessageSquare size={18} />
          Text
        </button>
        <button
          onClick={() => handleInteract("Video")}
          className="inline-flex flex-col items-center justify-center gap-2 rounded-[18px] border border-[#e5e7eb] bg-[#f8fafc] px-4 py-6 text-sm font-semibold text-[#111827] transition hover:bg-[#eef2ff]"
        >
          <Video size={18} />
          Video
        </button>
      </div>
    </div>
  );
}