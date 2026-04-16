import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesColumn, Clock3, House, Plus } from "lucide-react";

import friends from "../data/friends.json";

const statusStyles = {
  overdue: "bg-[#fef2f2] text-[#b91c1c]",
  "almost due": "bg-[#fef7ed] text-[#b45309]",
  "on-track": "bg-[#ecfdf5] text-[#166534]",
};

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 800)); // delay
  const totalFriends = friends.length;
  const onTrack = friends.filter((friend) => friend.status === "on-track").length;
  const needAttention = friends.filter((friend) => friend.status !== "on-track").length;
  const interactionsThisMonth = friends.filter((friend) => friend.days_since_contact <= 14).length * 2;
  return (
    <main className="min-h-screen bg-[#f6f8f8] px-4 pt-4 md:px-12 md:pt-3.5">
      <div className="mx-auto flex flex-col w-full max-w-5xl items-start justify-between gap-4 sm:flex-row sm:gap-0">
        <Image src="/logo.png" alt="KeenKeeper logo" width={141} height={32} priority />

        <nav className="flex items-center gap-0.5 rounded-[10px] border border-[#e4e7ec] bg-white p-1 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#184d3d] px-3.5 text-[12px] font-medium text-white"
          >
            <House size={13} strokeWidth={2.2} />
            Home
          </button>
          <Link href="/timeline"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <Clock3 size={13} strokeWidth={2.1} />
            Timeline
          </Link>
          <Link href="/stats"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <ChartNoAxesColumn size={13} strokeWidth={2.1} />
            Stats
          </Link>
        </nav>
      </div>
      <section className="mx-auto mt-8 max-w-5xl rounded-[26px] bg-white px-5 py-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:mt-14 sm:px-8 sm:py-12">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-[#2f5346]">KeenKeeper</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#111827] sm:text-5xl">Friends to keep close in your life</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6b7280]">
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
            <p className="mt-4 text-3xl font-semibold text-[#111827]">{totalFriends}</p>
          </div>
          <div className="rounded-[20px] border border-[#e5e7eb] bg-[#effaf7] p-6 text-center shadow-sm">
            <p className="text-xs uppercase tracking-[0.26em] text-[#2f5346]">On Track</p>
            <p className="mt-4 text-3xl font-semibold text-[#111827]">{onTrack}</p>
          </div>
          <div className="rounded-[20px] border border-[#e5e7eb] bg-[#fef3f2] p-6 text-center shadow-sm">
            <p className="text-xs uppercase tracking-[0.26em] text-[#b91c1c]">Need Attention</p>
            <p className="mt-4 text-3xl font-semibold text-[#111827]">{needAttention}</p>
          </div>
          <div className="rounded-[20px] border border-[#e5e7eb] bg-[#eef2ff] p-6 text-center shadow-sm">
            <p className="text-xs uppercase tracking-[0.26em] text-[#3730a3]">Interactions This Month</p>
            <p className="mt-4 text-3xl font-semibold text-[#111827]">{interactionsThisMonth}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-10 max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#111827]">Your Friends</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {friends.map((friend) => (
            <Link
              key={friend.id}
              href={`/friend/${friend.id}`}
              className="rounded-[26px] border border-[#e5e7eb] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-[#f3f4f6]">
                  <img src={friend.picture} alt={friend.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-4">
                  <p className="text-base font-semibold text-[#111827]">{friend.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#6b7280]">{friend.days_since_contact}d ago</p>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {friend.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#eff6ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1d4ed8]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className={`mt-5 inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${statusStyles[friend.status]}`}
                >
                  {friend.status.replace("-", " ")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}