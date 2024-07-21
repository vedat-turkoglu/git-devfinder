/* eslint-disable react/prop-types */
import "./user-info-link.style.css";

const UserInfoLink = ({ icon, linkTitle }) => {
  return (
    <div className="info-link">
      <img src={icon} alt="icon" />
      <a>{linkTitle || "Not Available"}</a>
    </div>
  );
};
export default UserInfoLink;
