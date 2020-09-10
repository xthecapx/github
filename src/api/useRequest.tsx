import useSwr from "swr";
import { fetcher } from "./";

const baseUrl = "https://api.github.com/search";

export type ItemType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
};

export type Data = {
  total_count: number;
  incomplete_results: boolean;
  items: ItemType[];
};

export const useRequest = (
  path?: string
): { data: Partial<Data>; error: any; isValidating: any } => {
  const { data = {}, error, isValidating } = useSwr<Data>(
    path ? baseUrl + path : null,
    fetcher
  );

  return { data, error, isValidating };
};
