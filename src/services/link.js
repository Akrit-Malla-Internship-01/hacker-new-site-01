import axios from "axios";
export const mainURL = " https://hacker-news.firebaseio.com/v0/";
export const newStoriesURL = `${mainURL}newStories.json`;
export const storiesURL = `${mainURL}item/`;

export const getStoriesIDs = async () => {
  const result = await axios.get(newStoriesURL).then((data) => data);
  return result;
};
