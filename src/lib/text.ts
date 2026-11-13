/** Wrap the accent phrase of a title in <em> (escaped). */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export function accent(text: string, word?: string): string {
  const t = esc(text);
  if (!word) return t;
  const w = esc(word);
  const i = t.lastIndexOf(w);
  return i < 0 ? t : `${t.slice(0, i)}<em>${w}</em>${t.slice(i + w.length)}`;
}
export const landscapes = ['Polar', 'Desert', 'Volcanic', 'Rainforest', 'Alpine', 'Marine'] as const;
