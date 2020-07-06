import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import Search from "./Search";
import PostDetails from "./PostDetail";

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Search />
        <PostList />
      </Route>

      <Route path="/posts/add">
        <PostForm />
      </Route>

      <Route path="/posts/:id">
          <PostDetails />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;