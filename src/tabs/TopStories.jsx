import axios from "axios";
import React, { Component } from "react";
import NewsDesc from "./NewsDesc";

export default class TopStories extends Component {
  constructor() {
    super();
    this.state = {
      topStories: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => {
        this.setState({ topStories: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { topStories } = this.state;

    let news = topStories.map((element, i) => {
      return <NewsDesc key={element} index={i + 1} id={element} />;
    });

    return <div>{news}</div>;
  }
}
