import useSwr from "swr";
import { fetcher } from "./";

const baseUrl = "https://api.github.com/search";

export const useRequest = (
  path?: string
): { data: any; error: any; isValidating: any } => {
  const { data, error, isValidating } = useSwr(path ? baseUrl + path : null, fetcher);

  return { data, error, isValidating };
};
