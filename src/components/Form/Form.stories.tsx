import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';
import { Input } from '../Inputs/Input';
import { Checkbox } from '../Inputs/Checkbox';
import { Radio } from '../Inputs/Radio';
import { Button } from '../Button/Button';
import { Select } from '../Inputs/Select';

const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

export const FormStory: Story = {
    render: (args) => (
      <Form {...args}>
        <Input name="name" label="Full name" value="I'll fix this in post" />
        <Checkbox name="terms" label="I agree to the terms and conditions" />
        <Radio name="preferences" label="Select your contact preferences" values={['email', 'phone', 'mail']} />
        <Select name="select" label="Select an option" options={[{value: 'Option 1'}, {value: 'Option 2'}, {value: 'Option 3'}]} />
        <Button type="submit" variant="primary" onClick={() => alert('Sent, boss')}>Submit</Button>
      </Form>
    ),
  };