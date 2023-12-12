import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '../../components/Select/Select';

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: () => (
        <Select name="select" label="Select an option" options={[{value: 'Option 1'}, {value: 'Option 2'}, {value: 'Option 3'}]} />
    ),
  };