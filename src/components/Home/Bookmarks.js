import React, { useState, useEffect, memo } from "react";
import { filter } from "lodash";
import { navigate } from "@reach/router";

import { BookmarksWrap } from "./style";
import ItemBookmark from "./ItemBookmark";
import NoBookmark from "./NoBookmark";
import { HocDrawer } from "../Ui";

const Bookmarks = ({ title }) => {
  const [bookmarks, loadBookmarks] = useState([]);

  async function getBookmarks() {
    const bookmarksLocal = localStorage.getItem("bookmarks");
    const b = JSON.parse(bookmarksLocal);
    loadBookmarks(b);
  }

  const removeBookmark = async bookmark => {
    const filterBookmarks = await filter(bookmarks, b => b.id !== bookmark.id);

    await loadBookmarks(filterBookmarks);
    await localStorage.setItem("bookmarks", JSON.stringify(filterBookmarks));
  };

  const redirect = async bookmark => {
    const { id } = bookmark;
    await localStorage.setItem("pageStory", JSON.stringify(bookmark));
    await navigate(`/story/${id}`);
  };

  useEffect(
    () => {
      getBookmarks();
    },
    [bookmarks]
  );

  const renderBookmarks = () => {
    if (bookmarks.length === 0) return <NoBookmark />;

    return (
      <div style={{}}>
        {bookmarks.map(b => (
          <ItemBookmark
            key={b.id}
            bookmark={b}
            redirect={redirect}
            removeBookmark={removeBookmark}
          />
        ))}
      </div>
    );
  };

  return (
    <HocDrawer>
      <BookmarksWrap>
        <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
          {renderBookmarks()}
        </div>
      </BookmarksWrap>
    </HocDrawer>
  );
};

Bookmarks.defaultProps = { title: "Bookmarks" };

export default memo(Bookmarks);
