import type { ButtonProps } from "../../types";
import { SvgIcon } from "../SvgIcon";
import { IconButton } from "./styles";

const Button = ({ icon, fn }: ButtonProps) => {
  return (
    <IconButton onClick={fn}>
      <SvgIcon src={icon} />
    </IconButton>
  );
};

export default Button;
