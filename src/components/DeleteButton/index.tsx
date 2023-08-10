import React from "react";
import IconButton from "../IconButton";
import { ReactComponent as DeleteIcon } from "./delete_button_icon.svg";

interface DeleteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  light?: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  light,
  ...buttonProps
}) => {
  const iconClassName = light ? 'fill-white transition duration-200 ease-in-out hover:scale-150' : 'transition duration-200 ease-in-out hover:scale-150';

  return (
    <IconButton {...buttonProps}>
      <DeleteIcon className={iconClassName} />
    </IconButton>
  );
};

export default DeleteButton;
