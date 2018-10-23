import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./views/Home";
import Post from "./views/Post";
// import SinglePost from "./views/SinglePost";
import Generic from "./views/Generic";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import data from "./data.json";
import { documentHasTerm, getCollectionTerms } from "./util/data";
import { getPageByName, getPostBySlug } from "./util/data";
class App extends Component {
  state = {
    data
  };
  render() {
    return (
      <Router>
        <>
          <ScrollToTop />
          <Nav />
          <main>
            <Switch>
              <Route
                path="/"
                exact
                render={route => (
                  <Home
                    {...route}
                    {...getPageByName("home", this.state.data)}
                    data={this.state.data}
                  />
                )}
              />
              <Route
                path="/about/"
                exact
                render={route => (
                  <Generic
                    {...route}
                    {...getPageByName("about", this.state.data)}
                  />
                )}
              />
              <Route
                path="/contact/"
                exact
                render={route => (
                  <Generic
                    {...route}
                    {...getPageByName("contact", this.state.data)}
                  />
                )}
              />
              <Route
                path="/posts/"
                render={route => (
                  <Post
                    {...route}
                    {...getPostBySlug(route.location.pathname, this.state.data)}
                  />
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
             })} */}
            </Switch>
          </main>
          <Footer />
        </>
      </Router>
    );
  }
}
export default App;
