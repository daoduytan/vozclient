import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import { filter, toNumber } from "lodash";

import { getPage } from "./ultil";
import { Spinner, Header, Pagination, Icon, Container } from "../Ui";
import { icons } from "../../assets";
import CardPost from "./CardPost";

const Story = ({ id }) => {
  const page = getPage(id);

  const [loading, setLoading] = useState(true);
  const [pageNumber, setPage] = useState(page);
  const [story, setStory] = useState({ title: "", data: [], totalPages: 1 });

  async function getStory(page) {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/stories/story", {
        params: {
          id,
          page: page || pageNumber
        }
      });
      const { story } = res.data;

      await setStory(story);
      await setLoading(false);
    } catch (e) {
      setStory({ title: "", data: [] });
      setLoading(false);
    }
  }

  useEffect(() => {
    getStory();
  }, []);

  const onNext = async page => {
    const o = { id, page };
    await localStorage.setItem("pageStory", JSON.stringify(o));
    await setPage(page);
    await getStory(page);
  };

  const onPrev = async page => {
    const o = { id, page };
    await localStorage.setItem("pageStory", JSON.stringify(o));
    await setPage(page);
    await getStory(page);
  };

  const { title, data, totalPages } = story;
  if (loading) return <Spinner />;
  if (story.data === 0) return <div>No Story</div>;

  const filterStory = filter(data, s => s.content !== null);

  const saveBook = async () => {
    const bookmark = {
      id,
      title,
      page: pageNumber
    };

    let bookmarks = [];

    const oldBookmarks = await localStorage.getItem("bookmarks");

    if (!oldBookmarks) {
      bookmarks = [bookmark];
      console.log(bookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
      const parseBookmarks = JSON.parse(oldBookmarks);
      const filterBookmarks = filter(parseBookmarks, b => b.id !== id);

      bookmarks = [...filterBookmarks, bookmark];

      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  };

  return (
    <Container>
      <Header
        leftContent={
          <Link to="/">
            <div style={{ padding: "0 10px" }}>
              <Icon icon={icons.leftArrow} size={25} />
            </div>
          </Link>
        }
        rightContent={
          <div style={{ padding: "0 10px" }} onClick={saveBook}>
            <Icon icon={icons.bookmark} size={25} />
          </div>
        }
      >
        {title}
      </Header>

      <div style={{ margin: "20px 0" }}>
        {filterStory.map(s => (
          <CardPost key={s.id} post={s} />
        ))}
      </div>

      <div style={{ margin: "30px 0" }}>
        <Pagination
          onNext={onNext}
          onPrev={onPrev}
          page={pageNumber}
          totalPages={toNumber(totalPages || 1)}
        />
      </div>
    </Container>
  );
};

export default Story;
