import axios from "axios";
import React, { Component } from "react";
import NewsDesc from "./NewsDesc";

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount(id) {
    axios
      .get("https://hacker-news.firebaseio.com/v0/item/" + { id } + ".json")
      .then((res) => {
        this.setState({ comments: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { comments } = this.state;

    let news = comments.map((element) => {
      return <NewsDesc key={element} id={element} />;
    });

    return (
      <div>
        <p>These are the comments: &nbsp;</p>
        {news}
      </div>
    );
  }
}
