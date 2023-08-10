import { ComponentMeta, ComponentStory } from '@storybook/react';

import FormInput from '.';

export default {
  title: 'FormInput',
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const InputText = Template.bind({});
InputText.args = {
  tag: 'input',
  placeholder: 'Placeholder',
};

export const Textarea = Template.bind({});
Textarea.args = {
  tag: 'textarea',
  placeholder: 'Placeholder',
  rows: 10,
  cols: 50,
};

export const Select: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args}>
    <option value="1" selected>Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </FormInput>
);
Select.args = {
  tag: 'select',
};
