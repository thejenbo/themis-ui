import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../../components/Link/Link';

const meta: Meta<typeof Link> = {
  title: 'Inputs/Link',
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;


export const Default: Story = {
    args: {
        children: 'A regular ol\' anchor tag',
        href: '/link',
    },
};
