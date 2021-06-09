import axios from "axios";
import React, { Component } from "react";
import NewsDesc from "./NewsDesc";

export default class BestStories extends Component {
  constructor() {
    super();
    this.state = {
      bestStories: [],
    };
  }
  componentDidMount() {
    axios
      .get(` https://hacker-news.firebaseio.com/v0/beststories.json`)
      .then((res) => {
        this.setState({ bestStories: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { bestStories } = this.state;

    let news = bestStories.map((element) => {
      return <NewsDesc key={element} id={element} />;
    });

    return (
      <div>
        <p>These are the best stories: &nbsp;</p>
        {news}
      </div>
    );
  }
}
