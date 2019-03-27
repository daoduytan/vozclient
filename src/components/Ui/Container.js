import React, { memo } from "react";

import { ContainerWrap } from "./style";

const Container = ({ children }) => <ContainerWrap>{children}</ContainerWrap>;

export default memo(Container);
