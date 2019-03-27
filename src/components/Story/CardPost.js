import React, { memo } from "react";
import { toString } from "lodash";
import parse from "html-react-parser";

import { CardPostWrap, Author, PostContent } from "./style";

const CardPost = ({ post }) => {
  const html = toString(post.content);
  return (
    <CardPostWrap>
      <Author>{post.author}</Author>
      <PostContent>{parse(html)}</PostContent>
    </CardPostWrap>
  );
};

export default memo(CardPost);
