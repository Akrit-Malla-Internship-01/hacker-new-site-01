import React, { Component } from "react";
import BestStories from "./BestStories";
import LatestStories from "./LatestStories";
import TopStories from "./TopStories";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Comments from "./Comments";

export default class Header extends Component {
  storiesHandler = () => {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav className="nav-bar">
            <h3>Hacker News</h3>

            <Link to={"/topStories"}>
              <h6>Top stories |</h6>
            </Link>
            <Link to={"/bestStories"}>
              <h6>Best stories |</h6>
            </Link>
            <Link to={"/latestStories"}>
              <h6>Latest stories |</h6>
            </Link>
            <Link to={"/comments"}>
              <h6>Comments |</h6>
            </Link>

            <h6 className="login-nav-bar">login</h6>
          </nav>
          <Switch>
            <Route path={"/topStories"} component={TopStories} exact />
            <Route path={"/bestStories"} component={BestStories} exact />
            <Route path={"/latestStories"} component={LatestStories} exact />
            <Route path={"/comments"} component={Comments} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
