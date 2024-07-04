import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@medap-ui/react'
import { Cross } from 'lucide-react'

export default {
  title: 'Components/Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    errorMessage: '',
    inputSize: 'medium',
    inputWidth: 'medium',
    inputPlaceholder: '',
    isRequired: false,
  },
  argTypes: {
    inputSize: {
      options: ['small', 'medium'],
      control: 'inline-radio',
    },
    inputWidth: {
      options: ['small', 'medium', 'large', 'full'],
      control: 'inline-radio',
    },
    isRequired: {
      control: 'boolean',
    },
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
  },
}

export const Secondary: StoryObj<TextInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    inputSize: 'small',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    disabled: true,
  },
}

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    icon: <Cross />,
    inputPlaceholder: 'Placeholder',
  },
}

export const Required: StoryObj<TextInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    isRequired: true,
  },
}

export const WithError: StoryObj<TextInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    errorMessage: 'Mensagem de erro',
  },
}

export const FullWidth: StoryObj<TextInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    inputWidth: 'full',
  },
}
