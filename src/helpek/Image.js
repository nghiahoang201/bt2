import React from "react";

const Image = ({ src, alt, classes }) => {
  return <img src={src} alt={alt} className={classes} />;
};

export default Image;
