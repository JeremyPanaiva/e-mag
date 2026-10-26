// Prefix a /public path with the deploy base path (next/image does not add it for string src).
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
