import React, { memo } from "react";

import { icons } from "../../assets";
import { Icon } from "../Ui";
import { BookmarkWrap } from "./style";

const ItemBookmark = ({ bookmark, redirect, removeBookmark }) => (
  <BookmarkWrap>
    <div onClick={() => redirect(bookmark)} className="content">
      <div className="iconBook">
        <Icon icon={icons.book} />
      </div>
      <div className="title">
        {bookmark.title}
        <br />

        <span>Trang: {bookmark.page}</span>
      </div>
    </div>

    <div onClick={() => removeBookmark(bookmark)} className="remove">
      <Icon icon={icons.delete} />
    </div>
  </BookmarkWrap>
);

export default memo(ItemBookmark);
