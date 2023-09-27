import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  prefix: "tw-",
});

import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
