import type { Meta, StoryObj } from '@storybook/react';

import { ComboBox } from '../../components/ComboBox/ComboBox';

const meta: Meta<typeof ComboBox> = {
  title: 'Inputs/ComboBox',
  component: ComboBox,
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

export const Default: Story = {
    render: () => (
        <ComboBox 
          name="select" 
          label="Which country do you live in?" 
          options={[{value: 'Option 1'}, {value: 'Option 2'}, {value: 'Option 3'}]} 
          placeholder="Type to search"
          setValue={() => null}
        />
    ),
  };