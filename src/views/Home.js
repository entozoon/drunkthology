import React from "react";
import Helmet from "react-helmet";
import Content from "../components/Content";
import Posts from "../components/Posts";

export default ({ data, body, title, subtitle, featuredImage }) => {
  return (
    <>
      <Helmet>
        <title>Drunkthology</title>
        <meta name="description" content="Wonderful review site" />}
      </Helmet>

      <img src={featuredImage} alt="" />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <Posts posts={data.posts} />

      <Content source={body} />
    </>
  );
};
