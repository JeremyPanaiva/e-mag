const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .replace(/s$/, "");

// A kicker is only worth showing when it differs from the rubrique label.
export function kickerAdds(kicker: string | undefined, label: string): kicker is string {
  return !!kicker && norm(kicker) !== norm(label);
}
