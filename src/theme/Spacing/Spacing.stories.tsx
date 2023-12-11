import type { Meta, StoryObj } from '@storybook/react';

import { SpacingDisplay } from './Spacing';

const meta: Meta<typeof SpacingStory> = {
  component: SpacingDisplay,
};

export default meta;
type Story = StoryObj<typeof SpacingDisplay>;

export const SpacingStory: Story = {
    render: () => (
        <SpacingDisplay />
    ),
  };