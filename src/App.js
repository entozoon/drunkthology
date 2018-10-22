import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import ScrollToTop from "./components/ScrollToTop";
import Meta from "./components/Meta";
import Home from "./views/Home";
// import SinglePost from "./views/SinglePost";
import Generic from "./views/Generic";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import data from "./data.json";
import { slugify } from "./util/url";
import { documentHasTerm, getCollectionTerms } from "./util/collection";

class App extends Component {
  state = {
    data
  };

  componentDidMount = () => {
    // console.log(this.state.data);
  };

  getDataItem = (collection, name) => {
    return (
      this.state.data[collection] &&
      this.state.data[collection].filter(c => c.name === name)[0]
    );
  };

  render() {
    const posts = this.state.data.posts.filter(post => post.status !== "Draft");
    const categoriesFromPosts = getCollectionTerms(posts, "categories");
    const postCategories = this.state.data.postCategories.filter(
      category => categoriesFromPosts.indexOf(category.name.toLowerCase()) >= 0
    );

    return (
      <Router>
        <div>
          <ScrollToTop />
          {/* It is possible to override title with <Helmet /> and meta description with <Meta />
          <Helmet
            defaultTitle="Drunkthology"
            titleTemplate={`Drunkthology | %s`}
          /> */}
          <Helmet title="hey 1" />

          <Nav />

          <Switch>
            <Route
              path="/"
              exact
              render={route => (
                <Home {...route} {...this.getDataItem("pages", "home")} />
              )}
            />
            <Route
              path="/about/"
              exact
              render={route => (
                <Generic {...route} {...this.getDataItem("pages", "about")} />
              )}
            />
            <Route
              path="/contact/"
              exact
              render={route => (
                <Generic {...route} {...this.getDataItem("pages", "contact")} />
              )}
            />

            {/* {posts.map((post, index) => {
               const path = slugify(`/blog/${post.title}`);
               const nextPost = posts[index - 1];
               const prevPost = posts[index + 1];
               return (
                 <RouteWithMeta
                   key={path}
                   path={path}
                   exact
                   component={SinglePost}
                   fields={post}
                   nextPostURL={nextPost && slugify(`/blog/${nextPost.title}/`)}
                   prevPostURL={prevPost && slugify(`/blog/${prevPost.title}/`)}
                 />
               );
             })}

             {postCategories.map(postCategory => {
               const slug = slugify(postCategory.title);
               const path = slugify(`/blog/category/${slug}`);
               const categoryPosts = posts.filter(post =>
                 documentHasTerm(post, "categories", slug)
               );
               return (
                 <RouteWithMeta
                   key={path}
                   path={path}
                   exact
                   component={Blog}
                   fields={this.getDataItem("pages", "blog")}
                   posts={categoryPosts}
                   postCategories={postCategories}
                 />
               );
             })} */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
