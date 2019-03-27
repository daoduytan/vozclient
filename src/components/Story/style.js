import styled from "styled-components";
import { theme } from "../../configs";

const BtnHeader = styled.div`
  padding: 0 ${theme.sizes.space}px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.border};
  }
`;

const CardPostWrap = styled.div`
  background: #fff;
  border: 1px solid ${theme.colors.border};
  margin: ${theme.sizes.space - 5}px;
  border-radius: 5px;
  overflow: hidden;
`;

const Author = styled.div`
  border-bottom: 1px solid ${theme.colors.border};
  padding: ${theme.sizes.space - 8}px ${theme.sizes.space}px;
  font-weight: 600;
  font-size: ${theme.fonts.size - 4}px
  background: #f9f9f9;
`;

const PostContent = styled.div`
  padding: ${theme.sizes.space}px;

  img {
    max-width: 100%;
    display: inline-block;
  }
`;

export { BtnHeader, CardPostWrap, Author, PostContent };
