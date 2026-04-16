import Image from "next/image";
import Link from "next/link";
import { Clock3, ChartNoAxesColumn, ChevronDown } from "lucide-react";

export default function Timeline() {
  const timelineData = [
    { type: "Meetup", icon: "🤝", person: "Ukyo Tachibana", date: "March 29, 2026" },
    { type: "Text", icon: "/text.png", isImage: true, person: "Nakoruru", date: "March 28, 2026" },
    { type: "Meetup", icon: "🤝", person: "Mai Shiranui", date: "March 26, 2026" },
    { type: "Video", icon: "/video.png", isImage: true, person: "Wang Zhaojun", date: "March 23, 2026" },
    { type: "Meetup", icon: "🤝", person: "Da Qiao", date: "March 21, 2026" },
    { type: "Call", icon: "/call.png", isImage: true, person: "Xiao Qiao", date: "March 19, 2026" },
    { type: "Meetup", icon: "🤝", person: "Ukyo Tachibana", date: "March 17, 2026" },
    { type: "Text", icon: "/text.png", isImage: true, person: "Mai Shiranui", date: "March 13, 2026" },
    { type: "Call", icon: "/call.png", isImage: true, person: "Xiao Qiao", date: "March 11, 2026" },
    { type: "Call", icon: "/call.png", isImage: true, person: "Nakoruru", date: "March 11, 2026" },
    { type: "Video", icon: "/video.png", isImage: true, person: "Wang Zhaojun", date: "March 6, 2026" },
    { type: "Video", icon: "/video.png", isImage: true, person: "Xiao Qiao", date: "February 24, 2026" },
  ];

  return (
    <main className="min-h-screen bg-[#f6f8f8] px-12 pb-24 pt-3.5">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="KeenKeeper logo" width={141} height={32} priority />
        </Link>

        <nav className="flex items-center gap-0.5 rounded-[10px] border border-[#e5e7eb] bg-white p-1 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <Link
            href="/timeline"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#184d3d] px-3.5 text-[12px] font-medium text-white"
          >
            <Clock3 size={13} strokeWidth={2.2} />
            Timeline
          </Link>
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <ChartNoAxesColumn size={13} strokeWidth={2.1} />
            Stats
          </button>
        </nav>
      </div>

      <section className="mx-auto mt-16 max-w-5xl">
        <h1 className="text-[34px] font-bold text-[#1f2937]">Timeline</h1>
        
        <div className="mb-6 mt-6 flex w-[260px] items-center justify-between rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 text-sm text-[#6b7280]">
          <span>Filter timeline</span>
          <ChevronDown size={16} strokeWidth={2} />
        </div>

        <div className="flex flex-col gap-4">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 rounded-lg border border-[#f1f5f9] bg-white px-6 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
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
          ))}
        </div>
      </section>
    </main>
  );
}