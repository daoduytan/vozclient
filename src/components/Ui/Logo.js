import React from "react";
import { icons } from "../../assets";
import Icon from "./Icon";
import { LogoStyle } from "./style";

const Logo = () => (
  <LogoStyle>
    <Icon icon={icons.heart} color="red" size={30} />
  </LogoStyle>
);

export default Logo;
