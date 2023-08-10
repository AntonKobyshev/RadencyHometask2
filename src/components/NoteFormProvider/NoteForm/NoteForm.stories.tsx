import { ComponentMeta, ComponentStory } from '@storybook/react';

import NoteForm from '.';

export default {
  title: 'NoteForm',
  component: NoteForm,
} as ComponentMeta<typeof NoteForm>;

const Template: ComponentStory<typeof NoteForm> = (args) => (
  <NoteForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  initialValues: {
    name: '',
    content: '',
    categoryIndex: 1,
  },
};
