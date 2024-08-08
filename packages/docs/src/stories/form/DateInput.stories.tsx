import type { StoryObj, Meta } from '@storybook/react'
import { DateInput, DateInputProps } from '@medap-ui/react'
import { Cross } from 'lucide-react'

export default {
  title: 'Components/Form/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  args: {
    errorMessage: '',
    inputSize: 'medium',
    inputWidth: 'medium',
    isRequired: false,
  },
  argTypes: {
    inputSize: {
      options: ['small', 'medium'],
      control: 'inline-radio',
    },
    inputWidth: {
      options: ['medium', 'large', 'full'],
      control: 'inline-radio',
    },
    isRequired: {
      control: 'boolean',
    },
  },
} as Meta<DateInputProps>

export const Primary: StoryObj<DateInputProps> = {
  args: {},
}

export const Secondary: StoryObj<DateInputProps> = {
  args: {
    inputSize: 'small',
  },
}

export const Disabled: StoryObj<DateInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<DateInputProps> = {
  args: {
    icon: <Cross />,
  },
}

export const Required: StoryObj<DateInputProps> = {
  args: {
    isRequired: true,
  },
}

export const WithError: StoryObj<DateInputProps> = {
  args: {
    errorMessage: 'Mensagem de erro',
  },
}

export const FullWidth: StoryObj<DateInputProps> = {
  args: {
    inputWidth: 'full',
  },
}
