import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3, MessageSquare, Phone, Video, House, ChartNoAxesColumn } from "lucide-react";
import { notFound } from "next/navigation";
import friends from "../../../data/friends.json";

const statusStyles = {
  overdue: "bg-[#fef2f2] text-[#b91c1c]",
  "almost due": "bg-[#fef7ed] text-[#b45309]",
  "on-track": "bg-[#ecfdf5] text-[#166534]",
};

const interactionList = [
  { type: "Text", description: "Asked for career advice", date: "Jan 28, 2026" },
  { type: "Meetup", description: "Industry conference meetup", date: "Jan 28, 2026" },
  { type: "Video", description: "Asked for career advice", date: "Jan 28, 2026" },
  { type: "Text", description: "Asked for career advice", date: "Jan 28, 2026" },
];

function getIcon(type) {
  if (type === "Video") return Video;
  if (type === "Text") return MessageSquare;
  return Phone;
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function FriendDetails({ params }) {
  const id = Number(params.id);
  const friend = friends.find((item) => item.id === id);

  if (!friend) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f8f8] px-12 pb-24 pt-3.5">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Image src="/logo.png" alt="KeenKeeper logo" width={141} height={32} priority />

        <nav className="flex items-center gap-0.5 rounded-[10px] border border-[#e5e7eb] bg-white p-1 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <Link href="/" className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#184d3d] px-3.5 text-[12px] font-medium text-white">
            <House size={13} strokeWidth={2.2} />
            Home
          </Link>
          <button type="button" className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]">
            <Clock3 size={13} strokeWidth={2.1} />
            Timeline
          </button>
          <button type="button" className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]">
            <ChartNoAxesColumn size={13} strokeWidth={2.1} />
            Stats
          </button>
        </nav>
      </div>

      <section className="mx-auto mt-10 max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f2937] transition hover:text-[#111827]">
            <ArrowLeft size={18} />
            Back to dashboard
          </Link>
          <span className="rounded-full bg-[#eef2ff] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#3730a3]">
            Friend Details
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1.95fr]">
          <div className="rounded-[26px] border border-[#e5e7eb] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            <div className="flex flex-col items-center text-center">
              <div className="h-28 w-28 overflow-hidden rounded-full bg-[#f3f4f6]">
                <img src={friend.picture} alt={friend.name} className="h-full w-full object-cover" />
              </div>
              <div className="mt-6">
                <p className="text-2xl font-semibold text-[#111827]">{friend.name}</p>
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${statusStyles[friend.status]}`}>
                    {friend.status.replace("-", " ")}
                  </span>
                  {friend.tags.slice(0, 1).map((tag) => (
                    <span key={tag} className="rounded-full bg-[#ecfdf5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#166534]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mx-auto mt-6 max-w-65 text-sm leading-6 text-[#6b7280]">"{friend.bio}"</p>
              <p className="mt-5 text-xs uppercase tracking-[0.22em] text-[#9ca3af]">Preferred: email</p>
              <p className="mt-2 text-sm font-medium text-[#111827]">{friend.email}</p>
            </div>

            <div className="mt-10 grid gap-3">
              <button className="rounded-2xl border border-[#e5e7eb] bg-white py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#f8fafc]">
                Snooze 2 Weeks
              </button>
              <button className="rounded-2xl border border-[#e5e7eb] bg-white py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#f8fafc]">
                Archive
              </button>
              <button className="rounded-2xl border border-[#fee2e2] bg-[#fff1f2] py-3 text-sm font-semibold text-[#b91c1c] transition hover:bg-[#fee2e2]">
                Delete
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[20px] border border-[#e5e7eb] bg-white p-6 text-center shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6b7280]">{friend.days_since_contact}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[#6b7280]">Days Since Contact</p>
              </div>
              <div className="rounded-[20px] border border-[#e5e7eb] bg-white p-6 text-center shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#16a34a]">{friend.goal}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[#6b7280]">Goal (Days)</p>
              </div>
              <div className="rounded-[20px] border border-[#e5e7eb] bg-white p-6 text-center shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#16a34a]">{formatDate(friend.next_due_date)}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[#6b7280]">Next Due</p>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#6b7280]">Relationship Goal</p>
                  <p className="mt-2 text-base font-semibold text-[#111827]">Connect every {friend.goal} days</p>
                </div>
                <button className="rounded-[14px] border border-[#e5e7eb] bg-[#f8fafc] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#eef2ff]">
                  Edit
                </button>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#111827]">Quick Check-In</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <button className="inline-flex flex-col items-center justify-center gap-2 rounded-[18px] border border-[#e5e7eb] bg-[#f8fafc] px-4 py-6 text-sm font-semibold text-[#111827] transition hover:bg-[#eef2ff]">
                  <Phone size={18} />
                  Call
                </button>
                <button className="inline-flex flex-col items-center justify-center gap-2 rounded-[18px] border border-[#e5e7eb] bg-[#f8fafc] px-4 py-6 text-sm font-semibold text-[#111827] transition hover:bg-[#eef2ff]">
                  <MessageSquare size={18} />
                  Text
                </button>
                <button className="inline-flex flex-col items-center justify-center gap-2 rounded-[18px] border border-[#e5e7eb] bg-[#f8fafc] px-4 py-6 text-sm font-semibold text-[#111827] transition hover:bg-[#eef2ff]">
                  <Video size={18} />
                  Video
                </button>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#111827]">Recent Interactions</p>
                <button className="rounded-full border border-[#e5e7eb] bg-[#f8fafc] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#111827] transition hover:bg-[#eef2ff]">
                  Full History
                </button>
              </div>
              <div className="mt-5 space-y-4">
                {interactionList.map((interaction, index) => {
                  const Icon = getIcon(interaction.type);
                  return (
                    <div key={index} className="flex items-start gap-4 rounded-[18px] border border-[#e5e7eb] bg-[#f8fafc] p-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#153626]">
                        <Icon size={18} />
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold text-[#111827]">{interaction.type}</p>
                        <p className="mt-1 text-sm text-[#6b7280]">{interaction.description}</p>
                      </div>
                      <span className="text-xs uppercase tracking-[0.18em] text-[#9ca3af]">{interaction.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}