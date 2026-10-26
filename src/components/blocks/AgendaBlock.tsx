"use client";

import type { AgendaEvent } from "@/content/types";

const MONTHS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
const WEEKDAYS = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];

function icsEscape(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/[,;]/g, (c) => "\\" + c).replace(/\n/g, "\\n");
}

function buildIcs(ev: AgendaEvent): string {
  const [y, m, d] = ev.date.split("-").map(Number);
  const pad = (n: number) => String(n).padStart(2, "0");
  const day = `${y}${pad(m)}${pad(d)}`;
  const t = ev.time.match(/(\d{1,2})\s*h\s*(\d{2})?/i);
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Poles Actu//FR", "BEGIN:VEVENT", `UID:${day}-${Math.abs(hash(ev.title))}@poles-actu`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`];
  if (t) {
    const h = Number(t[1]);
    const min = Number(t[2] ?? 0);
    const end = new Date(y, m - 1, d, h + 2, min);
    lines.push(
      `DTSTART:${day}T${pad(h)}${pad(min)}00`,
      `DTEND:${end.getFullYear()}${pad(end.getMonth() + 1)}${pad(end.getDate())}T${pad(end.getHours())}${pad(end.getMinutes())}00`,
    );
  } else {
    const next = new Date(y, m - 1, d + 1);
    lines.push(`DTSTART;VALUE=DATE:${day}`, `DTEND;VALUE=DATE:${next.getFullYear()}${pad(next.getMonth() + 1)}${pad(next.getDate())}`);
  }
  lines.push(`SUMMARY:${icsEscape(ev.title)}`, `LOCATION:${icsEscape(ev.place)}`, "END:VEVENT", "END:VCALENDAR");
  return lines.join("\r\n");
}

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h;
}

function download(ev: AgendaEvent) {
  const blob = new Blob([buildIcs(ev)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${ev.title.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "evenement"}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function AgendaBlock({ events }: { events: AgendaEvent[] }) {
  return (
    <ul className="wide my-12 grid gap-4 md:my-16 md:grid-cols-2">
      {events.map((ev) => {
        const [y, m, d] = ev.date.split("-").map(Number);
        const wd = WEEKDAYS[new Date(y, m - 1, d).getDay()];
        return (
          <li key={ev.date + ev.title} className="flex gap-4 rounded-2xl border border-line bg-white p-4 md:p-5">
            <div className="flex h-24 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-[var(--accent)] text-center leading-none text-[var(--on-accent,#fff)]">
              <span className="text-xs font-semibold opacity-90">{wd}</span>
              <span className="mt-1 font-display text-4xl">{d}</span>
              <span className="mt-1 text-sm font-semibold">{MONTHS[m - 1]}</span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="font-display text-xl leading-snug">{ev.title}</h3>
              <p className="mt-1 text-[1rem] text-mute">
                {ev.time}, {ev.place}
              </p>
              <button
                onClick={() => download(ev)}
                className="mt-3 inline-flex h-11 w-fit items-center gap-2 rounded-full border border-ink px-4 text-[0.95rem] font-semibold transition-colors hover:bg-ink hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Ajouter à mon agenda
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
