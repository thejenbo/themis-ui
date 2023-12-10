import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const HeadingPage: Story = {
  args: {
    variant: 'headingPage',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const HeadingSection: Story = {
  args: {
    variant: 'headingSection',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const HeadingSubsection: Story = {
  args: {
    variant: 'headingSubsection',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};