/**
 * Utility functions for the application
 * Includes className merging and other common utilities
 */
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines className values and merges Tailwind classes
 * @param inputs - Array of class values to merge
 * @returns Merged className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
