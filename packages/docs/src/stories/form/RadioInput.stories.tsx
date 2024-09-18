import type { StoryObj, Meta } from '@storybook/react'
import { RadioInput, RadioInputProps } from '@medap-ui/react'
import { CreditCard } from 'lucide-react'

export default {
  title: 'Components/Form/RadioInput',
  component: RadioInput,
  tags: ['autodocs'],
  args: {
    radioSize: 'medium',
    variant: 'default',
  },
  argTypes: {
    radioSize: {
      options: ['small', 'medium', 'large'],
      control: 'inline-radio',
    },
    variant: {
      options: ['default', 'box'],
      control: 'inline-radio',
    },
  },
} as Meta<RadioInputProps>

export const Primary: StoryObj<RadioInputProps> = {
  args: {
    labelText: 'Label do radio input',
    radioId: 'example1',
  },
}

export const Secondary: StoryObj<RadioInputProps> = {
  args: {
    variant: 'box',
    labelText: 'Label do radio input',
    radioId: 'example2',
    icon: <CreditCard size={20} />,
  },
}
