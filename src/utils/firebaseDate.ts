// src/utils/firebaseDate.ts
// Конвертує Firebase Timestamp або Date у рядок формату "2025-03-01"

export type FirebaseTimestamp = {
  toDate: () => Date;
  seconds: number;
  nanoseconds: number;
};

export const isFirebaseTimestamp = (
  value: unknown,
): value is FirebaseTimestamp =>
  typeof value === "object" &&
  value !== null &&
  "toDate" in value &&
  typeof (value as FirebaseTimestamp).toDate === "function";

export const toDateString = (
  value: FirebaseTimestamp | Date | undefined,
): string => {
  if (!value) return new Date().toISOString().split("T")[0];
  const date = isFirebaseTimestamp(value) ? value.toDate() : value;
  return date.toISOString().split("T")[0];
};
