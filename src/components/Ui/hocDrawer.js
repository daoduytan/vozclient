import React, { useState } from "react";

import { icons } from "../../assets";
import { Icon } from "../Ui";
import { BtnDrawer, WrapDrawer, Gray, WrapContent, TitleDrawer } from "./style";

const HocDrawer = ({ children, position, icon, title, styleBtn }) => {
  const [open, toogle] = useState(false);

  const handleToggle = () => toogle(!open);
  const positionContent = position === "right" ? { right: 0 } : { left: 0 };

  const paddingTitleStyle =
    position === "right" ? { paddingRight: 15 } : { paddingLeft: 15 };

  return (
    <>
      <BtnDrawer onClick={handleToggle} style={styleBtn}>
        <Icon icon={icon || icons.bar} size={25} />
      </BtnDrawer>

      <WrapDrawer open={open}>
        <Gray onClick={handleToggle} />
        <WrapContent
          open={open}
          position={position}
          style={{ ...positionContent }}
        >
          <TitleDrawer>
            <div className="title" style={paddingTitleStyle}>
              {title}
            </div>
            <div onClick={handleToggle} className="icon">
              <Icon icon={icons.left} size={20} />
            </div>
          </TitleDrawer>
          <div>{children}</div>
        </WrapContent>
      </WrapDrawer>
    </>
  );
};

HocDrawer.defaultProps = {
  position: "left",
  styleBtn: {},
  title: "Bookmarks"
};

export default HocDrawer;
