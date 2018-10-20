import React from "react";
import Content from "../components/Content";

export default ({ fields }) => {
  const { title, subtitle, featuredImage, body } = fields;
  return (
    <main>
      <img src={featuredImage} alt="" />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <Content source={body} />
    </main>
  );
};
