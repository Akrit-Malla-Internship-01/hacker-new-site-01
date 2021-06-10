import axios from "axios";
import React, { Component } from "react";
import NewsDesc from "./NewsDesc";

export default class LatestStories extends Component {
  constructor() {
    super();
    this.state = {
      latestStories: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/newstories.json")
      .then((res) => {
        this.setState({ latestStories: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { latestStories } = this.state;

    let news = latestStories.map((element, i) => {
      return <NewsDesc key={element} index={i + 1} id={element} />;
    });

    return <div>{news}</div>;
  }
}
