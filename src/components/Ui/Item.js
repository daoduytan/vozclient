import React, { memo } from "react";

import styles from "./style.module.scss";

const Item = ({ children }) => <div className={styles.item}>{children}</div>;

export default memo(Item);
