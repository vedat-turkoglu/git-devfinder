import "./App.css";

import NavBar from "./components/nav-bar/nav-bar.component";
import SearchBar from "./components/search-bar/search-bar.component";
import SocialCount from "./components/social-count/social-count.component";
import UserInfoLink from "./components/user-info-link/user-info-link.component";

import iconLocation from "./assets/images/icon-location.svg";
import iconTwitter from "./assets/images/icon-twitter.svg";
import iconWebsite from "./assets/images/icon-website.svg";
import iconCompany from "./assets/images/icon-company.svg";

import { useContext } from "react";
import { UserContext } from "./context/user.context";

const App = () => {
  const { user } = useContext(UserContext);

  const d = new Date(user.created_at);
  const joinedDate = `${d.getDate()} ${d.toLocaleString("default", {
    month: "short",
  })} ${d.getFullYear()}`;

  return (
    <>
      <NavBar />
      <main className="wrapper">
        <SearchBar />
        <div className="card">
          <div className="card__header">
            <img
              src={user.avatar_url}
              alt="user picture"
              className="user-photo"
              width={117}
              height={117}
            />

            <div className="user-flex-container">
              <div className="user-name-container">
                <h2 className="user-name">{user.name || "Unknown"}</h2>
                <p>
                  <a href="#" className="user-link">
                    @{user.login}
                  </a>
                </p>
              </div>
              <p className="registration-date">Joined {joinedDate}</p>
            </div>
          </div>
          <p className="user-bio mr-left">
            {user.bio || "This profile has no bio"}
          </p>

          <div className="user-social-counts-box mr-left">
            <SocialCount title={"Repos"} number={user.public_repos} />
            <SocialCount title={"Followers"} number={user.followers} />
            <SocialCount title={"Following"} number={user.following} />
          </div>

          <div className="user-info-links-container mr-left">
            <UserInfoLink icon={iconLocation} linkTitle={user.location} />
            <UserInfoLink
              icon={iconTwitter}
              linkTitle={user.twitter_username}
            />
            <UserInfoLink icon={iconWebsite} linkTitle={user.blog} />
            <UserInfoLink icon={iconCompany} linkTitle={user.company} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
