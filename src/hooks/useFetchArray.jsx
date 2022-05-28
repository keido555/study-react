import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

export const useComponentsByPostsId = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};

export const usePostsByPostsId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};