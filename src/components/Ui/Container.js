import React, { memo } from "react";
import styles from "./style.module.scss";

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default memo(Container);
