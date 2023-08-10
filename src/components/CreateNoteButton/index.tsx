import React from "react";

interface CreateNoteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CreateNoteButton: React.FC<CreateNoteButtonProps> = ({
  ...buttonProps
}) => {
  return <button {...buttonProps} className="create_button border-2 border-gray-600 bg-blue-200 px-2 py-1 text-gray-600 rounded float-right transition duration-200 ease-in-out cursor-pointer hover:bg-gray-600 hover:text-white focus:bg-gray-600 focus:text-white" />;
};

export default CreateNoteButton;

