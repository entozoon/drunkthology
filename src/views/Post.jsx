import React from "react";
import moment from "moment";
import Helmet from "react-helmet";

export default ({
  title,
  date,
  featuredImage,
  excerpt,
  content,
  metaDescription
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <article>
        <h1>{title}</h1>
        <time>{moment(date).format("Do MMM YYYY")}</time>
      </article>
    </>
  );
};
