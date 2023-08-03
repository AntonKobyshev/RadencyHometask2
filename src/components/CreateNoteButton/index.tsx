import React from "react";
import styles from "./CreateNoteButton.module.css";

interface CreateNoteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CreateNoteButton: React.FC<CreateNoteButtonProps> = ({
  ...buttonProps
}) => {
  return <button {...buttonProps} className={styles.create_button} />;
};

export default CreateNoteButton;
