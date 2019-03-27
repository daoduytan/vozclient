import React, { memo } from "react";

import { ButtonWrap } from "./style";

const Button = ({ children, ...rest }) => (
  <ButtonWrap {...rest}>{children}</ButtonWrap>
);

export default memo(Button);
