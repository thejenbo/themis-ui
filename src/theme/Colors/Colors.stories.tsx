import type { Meta, StoryObj } from '@storybook/react';

import { ColorsDisplay } from './Colors';

const meta: Meta<typeof ColorsStory> = {
  component: ColorsDisplay,
};

export default meta;
type Story = StoryObj<typeof ColorsDisplay>;

export const ColorsStory: Story = {
    render: () => (
        <ColorsDisplay />
    ),
  };