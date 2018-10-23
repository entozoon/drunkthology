import React from "react";
import { NavLink } from "react-router-dom";
import { slugify } from "../util/url";
import moment from "moment";

export default ({ posts }) => {
  posts = posts
    // Convert date strings to proper Date objects
    .map(p => {
      p.date = new Date(p.date);
      return p;
    })
    // Filter out those with dates in the future
    .filter(p => p.date <= new Date())
    // Order by date
    .sort((a, b) => {
      return a.date < b.date;
    });

  if (!posts.length) return <p>No posts</p>;

  return (
    <div className="posts">
      {posts.map((p, i) => (
        <div className="post" key={i}>
          <h3>
            <NavLink to={`/posts/${slugify(p.title)}`}>{p.title}</NavLink>
          </h3>
          <time>{moment(p.date).format("Do MMM YYYY")}</time>
          <p>{p.excerpt}</p>
        </div>
      ))}
    </div>
  );
};
