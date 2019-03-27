import styled from "styled-components";
import { Link } from "@reach/router";
import { theme } from "../../configs";

const ItemStyle = styled(Link)`
  background: #fff;
  padding: ${theme.sizes.space}px;
  line-height: 1.5;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  border-bottom: 1px solid ${theme.colors.border};
  z-index: 1;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    z-index: 2;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .content {
    margin-left: ${theme.sizes.space - 5}px;

    small {
      color: ${theme.colors.gray};
    }
  }
`;

const BookmarksWrap = styled.div`
  display: flex;
  flex: 1;
  flexd-drection: column;
  height: 100vh;
`;

const BookmarkWrap = styled.div`
  display: flex;
  line-height: 1.5;
  padding: ${theme.sizes.space}px 0;
  border-bottom: 1px solid ${theme.colors.border}

  &:hover {
    background: ${theme.colors.border}
  }

  &:last-child {
    border: none
  }

  .content {
    display: flex;
    flex: 1;
    cursor: pointer;
  }

  .remove,
  .iconBook {
    padding: 0 ${theme.sizes.space}px;
  }

  .title {
    font-size: 14px;
    font-weight: 500;
    display: inline-block;

    span {
      margin-top: 5px;
      font-size: 12px;
      color: ${theme.colors.gray};

    }
  }
`;

export { BookmarksWrap, BookmarkWrap, ItemStyle };
