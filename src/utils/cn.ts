/**
 * Merge class names, filtering out falsy values.
 *
 * Why not clsx/tailwind-merge? This portfolio has no conflicting
 * utility classes, so a 3-line helper is sufficient. Add clsx
 * only if conditional class logic becomes complex across many
 * components.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
