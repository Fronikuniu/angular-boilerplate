import { type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    type: 'primary',
  },
};
export const Success: Story = {
  args: {
    type: 'success',
  },
};
export const Warning: Story = {
  args: {
    type: 'warning',
  },
};
export const Danger: Story = {
  args: {
    type: 'danger',
  },
};
