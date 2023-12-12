import type { Meta, StoryObj } from '@storybook/react';

import { FontsDisplay } from './Fonts';

const meta: Meta<typeof Default> = {
  title: 'Theme/Fonts',
  component: FontsDisplay,
};

export default meta;
type Story = StoryObj<typeof FontsDisplay>;

export const Default: Story = {
    render: () => (
        <FontsDisplay />
    ),
  };