import "./search-bar.style.css";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";

import searchIcon from "../../assets/images/icon-search.svg";

const noUser = {
  name: "No Result",
  created_at: `${new Date()}`,
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
  login: "noresult",
  public_repos: 0,
  followers: 0,
  following: 0,
  location: null,
  blog: null,
  company: null,
  twitter_username: null,
};

const SearchBar = () => {
  const [userName, setUserName] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSearch = async () => {
    if (!userName) {
      setUser(noUser);
    } else {
      const userData = await fetchData(userName);
      if (userData.message === "Not Found") {
        setUser(noUser);
      } else {
        setUser(userData);
      }
    }
    setUserName("");
  };

  return (
    <div className="search">
      <img
        src={searchIcon}
        alt="search icon"
        className="search__icon"
        width={24}
        height={24}
      />
      <input
        type="text"
        name="name"
        id="user-id"
        value={userName}
        placeholder="Search GitHub username…"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="button" className="search__button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
export default SearchBar;

// helper function for fetching user data
const fetchData = async (userName) => {
  const data = await fetch(`https://api.github.com/users/${userName}`);
  const res = await data.json();

  return res;
};
