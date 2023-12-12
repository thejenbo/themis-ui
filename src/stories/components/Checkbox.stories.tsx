import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../../components/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => (
      <div>
        <Checkbox name="terms" label="I agree to the terms and conditions" />
        <Checkbox name="terms" label="I cannot seem to agree to the terms and conditions" disabled />
      </div>
    ),
  };