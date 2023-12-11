import type { Meta, StoryObj } from '@storybook/react';

import { FontsDisplay } from './Fonts';

const meta: Meta<typeof FontsStory> = {
  component: FontsDisplay,
};

export default meta;
type Story = StoryObj<typeof FontsDisplay>;

export const FontsStory: Story = {
    render: () => (
        <FontsDisplay />
    ),
  };