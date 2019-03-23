import React, { memo } from "react";
import styles from "./style.module.scss";

const Header = ({ leftContent, rightContent, children }) => (
  <div className={styles.header}>
    {leftContent && <div>{leftContent}</div>}
    <div className={styles.titleHeader}>{children}</div>
    {rightContent && <div>{rightContent}</div>}
  </div>
);

export default memo(Header);
