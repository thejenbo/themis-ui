import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';
import { Input } from './Input';
import { Checkbox } from './Checkbox';
import { RadioGroup } from './RadioGroup';
import { Button } from '../Button/Button';
import { Select } from './Select';

const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

export const FormStory: Story = {
    render: (args) => (
      <Form {...args}>
        <Input name="name" label="Full name" />
        <Checkbox name="terms" label="I agree to the terms and conditions" />
        <RadioGroup name="preferences" label="Select your contact preferences" values={['email', 'phone', 'mail']} />
        <Select name="select" label="Select an option" options={[{value: 'Option 1'}, {value: 'Option 2'}, {value: 'Option 3'}]} />
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    ),
  };