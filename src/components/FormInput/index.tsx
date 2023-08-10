import React from "react";
import ClassList from '../../utils/classList';

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.SelectHTMLAttributes<HTMLSelectElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    tag: "input" | "select" | "textarea";
  };

const FormInput: React.FC<FormInputProps> = ({ tag, className, ...props }) => {
   const classList = new ClassList(
    'border-solid border-b-2 border-gray-300',
    'outline-none focus:border-gray-600',
    'p-3',
    'transition',
    className
  );

  return React.createElement(tag, {
    ...props,
    className: classList.compose(),
  });
};

export default FormInput;
