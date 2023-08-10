import { ComponentMeta, ComponentStory } from '@storybook/react';

import Table from '.';
import {
  Primary as TableRowPrimary,
  Head as TableRowHead,
} from '../TableRow/TableRow.stories';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  head: <TableRowHead {...TableRowHead.args} />,
};

export const Filled = Template.bind({});
Filled.args = {
  head: <TableRowHead {...TableRowHead.args} />,
  children: (
    <>
      <TableRowPrimary {...TableRowPrimary.args} />
      <TableRowPrimary {...TableRowPrimary.args} />
      <TableRowPrimary {...TableRowPrimary.args} />
    </>
  ),
};
