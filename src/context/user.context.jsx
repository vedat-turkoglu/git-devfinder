/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// import gitCatPicture from "../assets/images/git-cat.svg";

const defaultUser = {
  name: "The Octocat",
  created_at: "2011-01-25T18:44:36Z",
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  bio: "This profile has no bio",
  login: "octocat",
  public_repos: 8,
  followers: 14233,
  following: 9,
  location: "San Francisco",
  blog: "https://github.blog",
  company: "@github",
  twitter_username: null,
};

export const UserContext = createContext({
  user: {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
