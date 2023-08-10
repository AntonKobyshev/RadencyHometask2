import { ComponentMeta, ComponentStory } from '@storybook/react';

import TableRow from '.';

import { Primary as TableCellPrimary } from '../TableCell/TableCell.stories';
import { Primary as TableHeaderCellPrimary } from '../TableHeaderCell/TableHeaderCell.stories';

export default {
  title: 'TableRow',
  component: TableRow,
} as ComponentMeta<typeof TableRow>;

const Template: ComponentStory<typeof TableRow> = (args) => (
  <TableRow {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <TableCellPrimary {...TableCellPrimary.args} />
      <TableCellPrimary {...TableCellPrimary.args} />
      <TableCellPrimary {...TableCellPrimary.args} />
    </>
  ),
};

export const Head = Template.bind({});
Head.args = {
  isHead: true,
  children: (
    <>
      <TableHeaderCellPrimary {...TableHeaderCellPrimary.args} />
      <TableHeaderCellPrimary {...TableHeaderCellPrimary.args} />
      <TableHeaderCellPrimary {...TableHeaderCellPrimary.args} />
    </>
  ),
};
