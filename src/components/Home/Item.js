import React, { memo } from "react";
import { Link } from "@reach/router";
import { Icon } from "../Ui";
import { icons } from "../../assets";
import styles from "./home.module.scss";

const Item = ({ story }) => (
  <Link to={`story/${story.id}`} className={styles.item}>
    <div style={{ display: "flex" }}>
      <span>
        <Icon icon={icons.book} />
      </span>

      <div style={{ marginLeft: 10 }}>
        <div>{story.title}</div>
        <small style={{ color: "#a0a0a0" }}>{story.author}</small>
      </div>
    </div>
  </Link>
);

export default memo(Item);
