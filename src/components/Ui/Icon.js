import React, { memo } from "react";

const Icon = ({ icon, size, color, style, hover }: Props) => (
  <svg
    style={{
      ...style,
      display: "inline-block",
      verticalAlign: "middle"
    }}
    viewBox="0 0 1024 1024"
    width={size}
    height={size}
    className={hover && "hover"}
  >
    <g transform="scale(1, 1)">
      {icon.map(o => (
        <path key={o} d={o} fill={color || "#000"} />
      ))}
    </g>
  </svg>
);

Icon.defaultProps = {
  size: 16,
  color: "#00",
  style: {},
  hover: true
};

export default memo(Icon);
