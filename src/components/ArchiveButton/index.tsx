import React from "react";
import IconButton from "../IconButton";
import { ReactComponent as ArchiveIcon } from "./add_archive_icon.svg";
import { ReactComponent as RemoveFromArchiveIcon } from "./remove_from_archive_icon.svg";

export interface ArchiveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  light?: boolean;
  variant: "archive" | "unarchive";
}

const ArchiveButton: React.FC<ArchiveButtonProps> = ({
  light,
  variant,
  ...buttonProps
}) => {
  const IconComponent =
    variant === "archive" ? ArchiveIcon : RemoveFromArchiveIcon;
  const iconClassName = light ? 'transition duration-200 ease-in-out fill-white hover:scale-150' : 'transition duration-200 ease-in-out hover:scale-150';


  return (
    <IconButton {...buttonProps}>
      <IconComponent className={iconClassName} />
    </IconButton>
  );
};

export default ArchiveButton;
