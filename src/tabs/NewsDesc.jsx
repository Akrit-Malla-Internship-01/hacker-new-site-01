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

    return (
      <p key={data.id}>
        {isLoaded
          ? `${data.title} (url) ` +
            `${data.score} points, by: ${data.by},` +
            `Time: ${data.time}, ${data.descendants} comments`
          : ""}
        <p></p>
      </p>
    );
  }
}
