import React, { memo } from "react";

import { icons } from "../../assets";
import Button from "./Button";
import Icon from "./Icon";

import { PaginationWrap } from "./style";

const Pagination = ({ onNext, onPrev, page, loading, totalPages }) => {
  const nextPage = () => onNext(page + 1);

  const prevPage = () => onPrev(page - 1);

  return (
    <PaginationWrap>
      <Button onClick={prevPage} disabled={page === 1 || loading}>
        <Icon icon={icons.left} />
      </Button>
      <span>Trang {`${page}${totalPages ? `/${totalPages}` : ""}`}</span>
      <Button onClick={nextPage} disabled={loading || page === totalPages}>
        <Icon icon={icons.right} />
      </Button>
    </PaginationWrap>
  );
};

Pagination.defaultProps = { page: 1 };

export default memo(Pagination);
