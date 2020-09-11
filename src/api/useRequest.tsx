import { useContext } from "react";
import useSwr from "swr";
import { FormContext } from "../resources/Form";
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
const PAGE_SIZE = 10;

export const useRequest = (path?: string, query?: string): any => {
  const { page } = useContext(FormContext);
  const url = `${baseUrl}${path}&per_page=${PAGE_SIZE}&page=${page}`;
  const { data, error, isValidating } = useSwr(path ? url : null, fetcher);

  console.log(url);

  return {
    data,
    error,
    isValidating,
    PAGE_SIZE,
  };
};
