import type { Meta, StoryObj } from '@storybook/react';

import { SpacingDisplay } from './Spacing';

const meta: Meta<typeof Default> = {
  title: 'Theme/Spacing',
  component: SpacingDisplay,
};

export default meta;
type Story = StoryObj<typeof SpacingDisplay>;

export const Default: Story = {
    render: () => (
        <SpacingDisplay />
    ),
  };