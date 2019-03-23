import React, { useState, useEffect, memo } from "react";
import { filter } from "lodash";
import { navigate } from "@reach/router";

import { icons } from "../../assets";
import { Icon } from "../Ui";

const Bookmarks = () => {
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

  if (bookmarks.length === 0)
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        Chưa có bookmark nào
      </div>
    );

  return (
    <div>
      {bookmarks.map(b => (
        <div
          key={b.id}
          style={{
            borderBottom: "1px solid #eee",
            fontSize: 12,
            display: "flex",
            alignItems: "center"
          }}
        >
          <div
            style={{
              margin: 0,
              padding: "10px",
              display: "flex",
              flex: 1,
              alignItems: "flex-start"
            }}
            onClick={() => redirect(b)}
          >
            <div style={{ marginRight: 10 }}>
              <Icon icon={icons.book} />
            </div>
            <div>
              <div>
                <div>
                  <strong>{b.title}</strong>
                </div>

                <small>Trang: {b.page}</small>
              </div>
            </div>
          </div>

          <div style={{ padding: 10 }} onClick={() => removeBookmark(b)}>
            <Icon icon={icons.delete} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Bookmarks);
