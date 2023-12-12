import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from '../../components/Radio/Radio';
import { Spacing } from '../../common/spacing';

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Horizontal: Story = {
  args: {
    label: 'Horizontal radios',
    optionOrientation: 'horizontal',
    options: [{value: 'wow :-)'}, {value: 'cool!!'}, {value: 'very much horizontal'}],
  },
};

export const Vertical: Story = {
  args: {
    label: 'Vertical radios',
    optionOrientation: 'vertical',
    options: [{value: 'ayyy!'}, {value: 'nice :-)))'}, {value: 'soOoOOo vertical~~'}],
  },
};