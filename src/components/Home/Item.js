import React, { memo } from "react";

import { Icon } from "../Ui";
import { icons } from "../../assets";
import { ItemStyle } from "./style";

const Item = ({ story }) => (
  <ItemStyle to={`story/${story.id}`}>
    <div style={{ display: "flex" }}>
      <span>
        <Icon icon={icons.book} />
      </span>
      <div className="content">
        <div>{story.title}</div>
        <small>{story.author}</small>
      </div>
    </div>
  </ItemStyle>
);

export default memo(Item);
