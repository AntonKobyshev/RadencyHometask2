import { ComponentMeta, ComponentStory } from '@storybook/react';

import TableCell from '.';

export default {
  title: 'TableCell',
  component: TableCell,
} as ComponentMeta<typeof TableCell>;

export const Primary: ComponentStory<typeof TableCell> = (args) => (
  <TableCell {...args} />
);
Primary.args = {
  children: 'Table cell',
};
