import React from "react";
import Content from "../components/Content";

export default ({ body, title, subtitle, featuredImage }) => {
  return (
    <>
      <img src={featuredImage} alt="" />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <Content source={body} />
    </>
  );
};
