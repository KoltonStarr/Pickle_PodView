import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine Tailwind CSS class names.
 * Later classes override earlier ones allowing easy customization.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
