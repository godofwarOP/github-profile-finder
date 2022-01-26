import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const githubAxios = axios.create({
  baseURL: GITHUB_URL,
});

export const searchUsers = async (text, page) => {
  const params = new URLSearchParams({
    q: text,
    page,
    per_page: 30,
  });

  const response = await githubAxios.get(`/search/users?${params}`);
  return response.data;
};

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    githubAxios.get(`/users/${login}`),
    githubAxios.get(`/users/${login}/repos?${params}`),
  ]);

  return {
    user: user.data,
    repos: repos.data,
  };
};
