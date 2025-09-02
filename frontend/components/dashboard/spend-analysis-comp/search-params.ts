import { addYears, subYears, format } from "date-fns";
import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const searchParams = {
  startDate: parseAsString.withDefault(
    format(new Date("2000-01-01"), "yyyy-MM-dd"),
  ),
  endDate: parseAsString.withDefault(format(new Date(), "yyyy-MM-dd")),
};

export const searchParamsProject = {
  startDate: parseAsString.withDefault(
    format(subYears(new Date(), 50), "yyyy-MM-dd"),
  ),
  endDate: parseAsString.withDefault(
    format(addYears(new Date(), 50), "yyyy-MM-dd"),
  ),
};

export const searchParamOption = {
  shallow: false,
  clearOnDefault: true,
};

export const searchParamsCache = createSearchParamsCache({
  ...searchParams,
});

export type ParsedSearchParams = ReturnType<typeof searchParamsCache.parse>;

export const searchParamsProjectCache = createSearchParamsCache({
  ...searchParamsProject,
});

export type ParsedSearchProjectParams = ReturnType<
  typeof searchParamsProjectCache.parse
>;
