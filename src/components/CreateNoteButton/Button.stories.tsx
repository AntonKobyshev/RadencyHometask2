import { ComponentMeta, ComponentStory } from '@storybook/react';

import CreateNoteButton from '.';

export default {
  title: 'CreateNoteButton',
  component: CreateNoteButton,
} as ComponentMeta<typeof CreateNoteButton>;

export const Primary: ComponentStory<typeof CreateNoteButton> = (args) => (
  <CreateNoteButton {...args} />
);
Primary.args = {
  children: 'Push me',
};
