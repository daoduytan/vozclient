import { toNumber } from "lodash";

const getPage = idPage => {
  const pageCache = localStorage.getItem("pageStory");

  console.log(pageCache, idPage);

  if (!pageCache) return 1;
  const { id, page } = JSON.parse(pageCache);
  if (idPage !== id) return 1;

  return toNumber(page);
};

export { getPage };
