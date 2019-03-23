import React, { useState, useEffect } from "react";
import axios from "axios";

const storiesContext = {
  stories: [],
  loading: true,
  loadData: () => {}
};

export const context = React.createContext(storiesContext);
const { Provider } = context;

const StoriesContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [stories, loadStories] = useState([]);

  async function loadData(page) {
    try {
      setLoading(true);
      // const pageCache = await localStorage.getItem("page");
      const res = await axios.get("http://localhost:5000/stories", {
        params: { page: page || 1 }
      });
      const { stories } = res.data;
      await loadStories(stories);
      await setLoading(false);
    } catch (e) {
      loadStories([]);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Provider value={{ ...storiesContext, stories, loading, loadData }}>
      {children}
    </Provider>
  );
};

export default StoriesContext;
