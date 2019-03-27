import axios from "./axios";

export default {
  getAllStories: data =>
    axios({
      url: "/stories",
      methods: "GET",
      params: { ...data }
    }),

  getStory: data =>
    axios({ url: "/stories/story", methods: "GET", params: { ...data } })
};
