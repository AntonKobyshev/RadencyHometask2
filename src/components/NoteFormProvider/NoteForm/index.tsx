import React from "react";
import Button from "../../CreateNoteButton";
import styles from "./NoteForm.module.css";
import Input from "../../FormInput";
import categories from "../../../config/categories";

interface NoteFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  initialValues: {
    name: string;
    content: string;
    categoryIndex: number;
  };
}

const NoteForm: React.FC<NoteFormProps> = ({ initialValues, ...props }) => {
  const { name, content, categoryIndex } = initialValues;

  return (
    <form {...props} className={styles.noteForm}>
      <Input
        tag="input"
        type="text"
        placeholder="Name"
        name="name"
        defaultValue={name}
        required
      />
      <Input tag="select" name="categoryIndex" defaultValue={categoryIndex}>
        {categories.map((category, index) => (
          <option key={index} value={index}>
            {category.name}
          </option>
        ))}
      </Input>
      <Input
        tag="textarea"
        placeholder="Content"
        name="content"
        rows={10}
        cols={50}
        defaultValue={content}
      />
      <Button type="submit">Save</Button>
    </form>
  );
};

export default NoteForm;
