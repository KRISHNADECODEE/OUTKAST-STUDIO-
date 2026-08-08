import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* Standard shadcn class merger: clsx resolves conditionals, tailwind-merge
   drops earlier Tailwind classes that a later one overrides. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
