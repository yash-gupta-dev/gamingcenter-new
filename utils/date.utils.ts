import moment, { Moment, MomentInput } from "moment"


/**
 * --------------------
 * Constants
 * --------------------
 */

export const DATE_FORMAT = "YYYY-MM-DD";
export const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

/**
 * --------------------
 * Validation
 * --------------------
 */

export const isValidDate = (date: MomentInput): boolean => {
  return moment(date).isValid();
};

/**
 * --------------------
 * Formatting
 * --------------------
 */

export const formatDate = (
  date: MomentInput,
  format: string = DATE_FORMAT
): string => {
  if (!isValidDate(date)) return "";
  return moment(date).format(format);
};

export const formatDateTime = (date: MomentInput): string => {
  return formatDate(date, DATE_TIME_FORMAT);
};

/**
 * --------------------
 * Comparison
 * --------------------
 */

export const isSameDay = (
  date1: MomentInput,
  date2: MomentInput
): boolean => {
  return moment(date1).isSame(moment(date2), "day");
};

export const isBefore = (
  date1: MomentInput,
  date2: MomentInput,
  unit: moment.unitOfTime.StartOf = "second"
): boolean => {
  return moment(date1).isBefore(date2, unit);
};

export const isAfter = (
  date1: MomentInput,
  date2: MomentInput,
  unit: moment.unitOfTime.StartOf = "second"
): boolean => {
  return moment(date1).isAfter(date2, unit);
};

/**
 * --------------------
 * Manipulation
 * --------------------
 */

export const addDays = (
  date: MomentInput,
  days: number
): Date => {
  return moment(date).add(days, "days").toDate();
};

export const addMinutes = (
  date: MomentInput | Date,
  minutes: number
): Date => {
  return moment(date).add(minutes, "minutes").toDate();
};

export const subtractDays = (
  date: MomentInput,
  days: number
): Date => {
  return moment(date).subtract(days, "days").toDate();
};

export const startOfDay = (date: MomentInput): Date => {
  return moment(date).startOf("day").toDate();
};

export const endOfDay = (date: MomentInput): Date => {
  return moment(date).endOf("day").toDate();
};

/**
 * --------------------
 * Difference
 * --------------------
 */

export const diffInDays = (
  from: MomentInput,
  to: MomentInput
): number => {
  return moment(to).diff(moment(from), "days");
};

export const diffInMinutes = (
  from: MomentInput,
  to: MomentInput
): number => {
  return moment(to).diff(moment(from), "minutes");
};

/**
 * --------------------
 * Range
 * --------------------
 */

export const isBetweenDates = (
  date: MomentInput,
  start: MomentInput,
  end: MomentInput
): boolean => {
  return moment(date).isBetween(start, end, undefined, "[]");
};

/**
 * --------------------
 * Relative
 * --------------------
 */

export const fromNow = (date: MomentInput): string => {
  return moment(date).fromNow();
};

/**
 * --------------------
 * Parsing
 * --------------------
 */

export const parseDate = (
  dateString: string,
  format: string
): Date | null => {
  const parsed = moment(dateString, format, true);
  return parsed.isValid() ? parsed.toDate() : null;
};

/**
 * --------------------
 * Utilities
 * --------------------
 */

export const now = (): number => {
  return Date.now();
};

export const currentate = (): Date => {
  return new Date(now());
};

export const toISOString = (date: MomentInput): string => {
  return moment(date).toISOString();
};