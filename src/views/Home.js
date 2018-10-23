import React from "react";
import Helmet from "react-helmet";
import Content from "../components/Content";

export default ({ body, title, subtitle, featuredImage }) => {
  return (
    <>
      <Helmet>
        <title>Drunkthology</title>
        <meta name="description" content="Wonderful review site" />}
      </Helmet>

      <img src={featuredImage} alt="" />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <Content source={body} />
    </>
  );
};
