import axios from "axios";
import React, { Component } from "react";
import CommentsText from "./CommentsText";

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount(id) {
    axios
      .get("https://hacker-news.firebaseio.com/v0/maxitem.json")
      .then((res) => {
        this.setState({ comments: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { comments } = this.state;

    let news = <CommentsText key={comments} id={this.state.comments} />;

    return (
      <div>
        <p>These are the comments: &nbsp;</p>
        {news}
      </div>
    );
  }
}
