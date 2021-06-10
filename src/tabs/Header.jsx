import React, { Component } from "react";
import BestStories from "./BestStories";
import LatestStories from "./LatestStories";
import TopStories from "./TopStories";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Comments from "./Comments";
import logo from "../y18.gif";

export default class Header extends Component {
  storiesHandler = () => {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav className="nav-bar">
            <img src={logo} alt="logo" className="logo" />
            <p>Hacker News</p>
            <Link to={"/topStories"}>
              <p>Top stories |</p>
            </Link>
            <Link to={"/bestStories"}>
              <p>Best stories |</p>
            </Link>
            <Link to={"/latestStories"}>
              <p>Latest stories |</p>
            </Link>
            <Link to={"/comments"}>
              <p>Comments |</p>
            </Link>

            <p className="login-nav-bar">login</p>
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
