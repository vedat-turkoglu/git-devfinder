/* eslint-disable react/prop-types */
import "./social-count.style.css";

const SocialCount = ({ title, number }) => {
  return (
    <div className="social-box">
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};
export default SocialCount;
