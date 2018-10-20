import React from "react";
import Content from "../components/Content";

export default ({ fields }) => {
  const { body, title, subtitle, featuredImage } = fields;
  return (
    <div className="Contact">
      <img src={featuredImage} alt="" />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <Content source={body} />
    </div>
  );
};
