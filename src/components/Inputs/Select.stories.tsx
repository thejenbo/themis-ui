import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
    render: (args) => (
        <Select name="select" label="Select an option" options={[{value: 'Option 1'}, {value: 'Option 2'}, {value: 'Option 3'}]} />
    ),
  };