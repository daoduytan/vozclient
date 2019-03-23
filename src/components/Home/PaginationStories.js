import React, { useContext, useState, memo } from "react";
import { toNumber } from "lodash";

import { context } from "../../context/storiesContext";
import { Pagination } from "../Ui";

const getPage = () => {
  const pageCache = localStorage.getItem("page");
  if (!pageCache) return 1;
  return toNumber(pageCache);
};

const PaginationStories = () => {
  const page = getPage();
  const [pageNumber, setPage] = useState(page);
  const state = useContext(context);
  const { loadData } = state;

  const onNext = async page => {
    await localStorage.setItem("page", page);
    await setPage(page);
    await loadData(page);
  };

  const onPrev = async page => {
    await localStorage.setItem("page", page);
    await setPage(page);
    await loadData(page);
  };

  return <Pagination onNext={onNext} onPrev={onPrev} page={pageNumber} />;
};

export default memo(PaginationStories);
