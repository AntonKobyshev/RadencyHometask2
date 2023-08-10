import { ComponentMeta, ComponentStory } from '@storybook/react';

import TableHeaderCell from '.';

export default {
  title: 'TableHeaderCell',
  component: TableHeaderCell,
} as ComponentMeta<typeof TableHeaderCell>;

export const Primary: ComponentStory<typeof TableHeaderCell> = (args) => (
  <TableHeaderCell {...args} />
);
Primary.args = {
  children: 'Table cell',
};