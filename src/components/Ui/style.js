import styled from "styled-components";
import { theme } from "../../configs";

const ContainerWrap = styled.div`
  padding-top: 50px;
`;

const HeaderStyle = styled.div`
  display: flex;
  background: #fff;
  height: 50px;
  border-bottom: 1px solid ${theme.colors.border};
  font-weight: 700;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  align-items: center;

  .left,
  .right {
    height: 50px;
    line-height: 50px;
  }
`;

const HeaderTitleStyle = styled.div`
  white-space: nowrap;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-align: center;
  flex: 1;
  text-overflow: ellipsis;
  padding: 0 ${theme.sizes.space}px;
`;

const BtnDrawer = styled.div`
  cursor: pointer;
  padding: 0 ${theme.sizes.space}px;

  &:hover {
    background: ${theme.colors.border};
  }
`;

const WrapDrawer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  zindex: 4;
  visibility: ${props => (props.open ? "visible" : "hidden")};
`;

const Gray = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  zindex: 2;
`;

const transform = ({ open, position }) => {
  if (open) return "translateX(0)";
  if (position === "left") return "translateX(-100%)";
  if (position === "right") return "translateX(100%)";

  return "translateX(0)";
};

const WrapContent = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  width: 70%;
  bottom: 0;
  background: #fff;
  transition: all 0.3s ease-in-out;
  transform: ${({ open, position }) => transform({ open, position })};
  visibility: ${props => (props.open ? "visible" : "hidden")};
`;

const TitleDrawer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.border};
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  .icon {
    padding: 0 ${theme.sizes.space}px;
    &:hover {
      background: ${theme.colors.border};
    }
  }
`;

const ButtonWrap = styled.button`
  background: #fff;
  border: 1px solid ${theme.colors.border};
  padding: 7px 10px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background: ${theme.colors.border};
    cursor: default;
    box-shadow: none;
  }
`;

const PaginationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    padding: 0 ${theme.sizes.space}px;
    font-size: ${theme.fonts.size}px;
    font-weight: 600;
  }
`;

const LogoStyle = styled.div``;

export {
  ContainerWrap,
  HeaderStyle,
  HeaderTitleStyle,
  BtnDrawer,
  WrapDrawer,
  Gray,
  WrapContent,
  TitleDrawer,
  ButtonWrap,
  PaginationWrap,
  LogoStyle
};
