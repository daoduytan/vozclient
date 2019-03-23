import React, { memo } from "react";

import styles from "./style.module.scss";

const Button = ({ children, ...rest }) => (
  <button {...rest} className={styles.button}>
    {children}
  </button>
);

export default memo(Button);
