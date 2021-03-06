import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api';

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }) => {

  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      login: undefined,
      name: undefined,
      avatar_url: undefined,
      html_url: undefined,
      company: undefined,
      blog: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api.get(`users/${username}`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        hasUser: true,
        user: {
          login: data.login,
          name: data.name,
          avatar_url: data.avatar_url,
          html_url: data.html_url,
          blog: data.blog,
          location: data.location,
          company: data.company,
          followers: data.followers,
          following: data.following,
          public_gists: data.public_gists,
          public_repos: data.public_repos,
        },
      }))
    }).finally(() => {
      setTimeout(() => { 
        setGithubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading,
        }))
      }, 2000);
    });
  };

  const getUserRepos = (username) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>{ children }</GithubContext.Provider>
  );
};

export default GithubProvider;
