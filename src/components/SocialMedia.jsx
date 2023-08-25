import React from "react";

const SocialMedia = ({ children, link, isPadded, isBlackIcon = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`text-${isBlackIcon ? "dark" : "light"} ${
        isPadded ? "ps-4" : ""
      }`}
    >
      {children}
    </a>
  );
};

export default SocialMedia;
