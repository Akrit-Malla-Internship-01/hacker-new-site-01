import axios from "axios";
import React, { Component } from "react";

export default class CommentsText extends Component {
  constructor() {
    super();
    this.state = { data: {} };
  }
  componentDidMount() {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" + this.props.id + ".json"
      )
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        this.setState({ data: {} });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="story">
        <div className="story_detail">
          {data.by}, Time: &nbsp;
          {new Date(data.time * 1000).toUTCString()}
          <br /> <br />
          <p className="story_title">{data.text}</p>
        </div>
      </div>
    );
  }
}
