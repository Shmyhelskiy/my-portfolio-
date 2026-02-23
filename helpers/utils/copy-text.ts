export function copyText(text: string | null | undefined) {
  if (!text) return null;
  navigator.clipboard.writeText(text);
}
