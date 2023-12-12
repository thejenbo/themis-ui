import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Inputs/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;


export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'example@domain.com',
    type: 'email',
  },
};