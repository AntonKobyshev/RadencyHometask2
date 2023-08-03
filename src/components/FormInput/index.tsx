import React from "react";
import styles from "./FormInput.module.css";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.SelectHTMLAttributes<HTMLSelectElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    tag: "input" | "select" | "textarea";
  };

const FormInput: React.FC<FormInputProps> = ({ tag, ...props }) => {
  return React.createElement(tag, { ...props, className: styles.input });
};

export default FormInput;
