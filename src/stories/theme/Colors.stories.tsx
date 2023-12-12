import type { Meta, StoryObj } from '@storybook/react';

import { ColorsDisplay } from './Colors';

const meta: Meta<typeof Default> = {
  title: 'Theme/Colors',
  component: ColorsDisplay,
};

export default meta;
type Story = StoryObj<typeof ColorsDisplay>;

export const Default: Story = {
    render: () => (
        <ColorsDisplay />
    ),
  };