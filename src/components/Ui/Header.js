import React, { memo } from "react";
import { HeaderStyle, HeaderTitleStyle } from "./style";

const Header = ({ leftContent, rightContent, children }) => (
  <HeaderStyle>
    {leftContent && <div className="left">{leftContent}</div>}
    <HeaderTitleStyle>{children}</HeaderTitleStyle>
    {rightContent && <div className="right">{rightContent}</div>}
  </HeaderStyle>
);

export default memo(Header);
