import React, { memo } from "react";
import { toString } from "lodash";
import parse from "html-react-parser";

import styles from "./story.module.scss";

const CardPost = ({ post }) => {
  const html = toString(post.content);
  return (
    <div className={styles.cardPost}>
      <div className={styles.author}>{post.author}</div>
      <div className={styles.postContent}>{parse(html)}</div>
    </div>
  );
};

export default memo(CardPost);
