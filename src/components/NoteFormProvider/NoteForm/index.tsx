import React from "react";
import Button from "../../CreateNoteButton";
import Input from "../../FormInput";
import categories from "../../../config/categories";
import ClassList from '../../../utils/classList';

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
    <form {...props} className={new ClassList(
        'fixed left-1/2 top-1/2 flex flex-col gap-4',
        'p-9 bg-blue-200 -translate-x-1/2 -translate-y-1/2'
      ).compose()}>
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
