import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const TypographyStory: Story = {
  render: () => (
    <>
      <Typography variant="headingPage" component="h1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography variant="headingSection" component="h2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography variant="headingSubsection" component="h3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography variant="body" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography variant="caption" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </>
  ),
};