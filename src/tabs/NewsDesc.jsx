import axios from "axios";
import React, { Component } from "react";

export default class NewsDesc extends Component {
  constructor() {
    super();
    this.state = { data: {}, isLoaded: false };
  }
  componentDidMount() {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" + this.props.id + ".json"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoaded: true });
      })
      .catch((err) => {
        this.setState({ data: {}, isLoaded: true });
      });
  }
  render() {
    const { isLoaded, data } = this.state;
    let display = isLoaded ? (
      <div className="story">
        <p className="story_title">{this.props.index + ". " + data.title}</p>
        <p className="story_detail">
          {data.score} points, by: {data.by}, Time:
          {new Date(data.time * 1000).toUTCString()},{data.descendants} comments
        </p>
      </div>
    ) : (
      ""
    );
    return <div key={data.id}> {display}</div>;
  }
}
