import Image from "next/image";
import { Globe, Mail, X } from "lucide-react";
import { InteractionProvider } from "@/context/InteractionContext";
import "./globals.css";

export const metadata = {
  title: "KinKeeper",
  description: "Family Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <InteractionProvider>
          {children}
        <footer className="bg-[#153626] text-white">
          <div className="mx-auto flex min-h-[300px] max-w-5xl flex-col items-center justify-center gap-8 px-6 py-10">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <Image src="/logo-xl.png" alt="KeenKeeper" width={220} height={60} priority />
              <p className="max-w-2xl text-sm leading-7 text-[#d1d5db]">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
              </p>
              <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-medium uppercase tracking-[0.18em] text-white/80">Social Links</span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#153626]">
                    <Globe size={16} />
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#153626]">
                    <Mail size={16} />
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#153626]">
                    <X size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full border-t border-white/10 pt-6">
              <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#9ca3af] sm:flex-row">
                <span>© 2026 KeenKeeper. All rights reserved.</span>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <span>Privacy Policy</span>
                  <span>Terms of Service</span>
                  <span>Cookies</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </InteractionProvider>
      </body>
    </html>
  );
}