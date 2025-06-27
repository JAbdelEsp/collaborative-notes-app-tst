import type { SvgIconProps } from "../../types";

export const SvgIcon = ({ src }: SvgIconProps) => (
  <img src={`/images/svg/${src}`} />
);
