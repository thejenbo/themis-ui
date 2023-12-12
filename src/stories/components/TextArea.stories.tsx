import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '../../components/TextArea/TextArea';

const meta: Meta<typeof TextArea> = {
    title: 'Inputs/TextArea',
    component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;


export const Default: Story = {
  args: {
    label: 'Product feedback',
    placeholder: 'Please enter a sentence or two about your experience with our product.',
  },
};