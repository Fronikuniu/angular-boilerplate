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
    type: '',
  },
};
export const Red: Story = {
  args: {
    type: 'red',
  },
};
export const Green: Story = {
  args: {
    type: 'green',
  },
};
export const Blue: Story = {
  args: {
    type: 'blue',
  },
};
