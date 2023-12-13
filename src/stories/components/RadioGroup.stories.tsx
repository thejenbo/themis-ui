import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from '../../components/Radios/RadioGroup';
import { Spacing } from '../../utils/spacing';

const meta: Meta<typeof RadioGroup> = {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

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