import type { Meta, StoryObj } from '@storybook/react';

import { ComboBox } from './ComboBox';

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

export const ComboBoxStory: Story = {
    render: () => (
        <ComboBox name="select" label="Select an option" options={[{value: 'Option 1'}, {value: 'Option 2'}, {value: 'Option 3'}]} />
    ),
  };