import { type FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "data" in error;
}

export const getApiErrorMessage = (
  error: FetchBaseQueryError | { message?: string } | undefined
): string | null => {
  if (!error) return null;

  if ("status" in error) {
    return (error.data as { message?: string })?.message ?? "Something went wrong";
  }

  return error.message ?? null;
};