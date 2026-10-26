// Client-side store for the issue order chosen in /admin (localStorage, shared across tabs).
import { useMemo, useSyncExternalStore } from "react";

export const ORDER_KEY = "emag-order-90";
const EVENT = "emag-order-change";

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

function getRaw(): string | null {
  try {
    return localStorage.getItem(ORDER_KEY);
  } catch {
    return null;
  }
}

export function saveOrder(slugs: string[] | null) {
  try {
    if (slugs) localStorage.setItem(ORDER_KEY, JSON.stringify(slugs));
    else localStorage.removeItem(ORDER_KEY);
  } catch {
    /* storage unavailable: ignore */
  }
  window.dispatchEvent(new Event(EVENT));
}

export function applyOrder(raw: string | null, defaults: string[]): string[] {
  if (!raw) return defaults;
  try {
    const saved = JSON.parse(raw);
    if (!Array.isArray(saved)) return defaults;
    const known = saved.filter((s): s is string => typeof s === "string" && defaults.includes(s));
    const unique = Array.from(new Set(known));
    return [...unique, ...defaults.filter((s) => !unique.includes(s))];
  } catch {
    return defaults;
  }
}

// Returns the default order on the server and during hydration, then the saved one.
export function useOrder(defaults: string[]): string[] {
  const raw = useSyncExternalStore(subscribe, getRaw, () => null);
  const key = defaults.join("|");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => applyOrder(raw, defaults), [raw, key]);
}
