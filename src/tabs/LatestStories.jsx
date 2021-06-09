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
    const story = axios
      .get("https://hacker-news.firebaseio.com/v0/newstories.json")
      .then((res) => {
        console.log(res.data);
        this.setState({ latestStories: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { latestStories } = this.state;

    let news = latestStories.map((element) => {
      return <NewsDesc key={element} id={element} />;
    });

    return (
      <div>
        <p>These are the latest stories: &nbsp;</p>
        {news}
      </div>
    );
  }
}
