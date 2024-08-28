import type { StoryObj, Meta } from '@storybook/react'
import { SelectInput, SelectInputProps } from '@medap-ui/react'
import { Cross } from 'lucide-react'

export default {
  title: 'Components/Form/SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
  args: {
    errorMessage: '',
    inputSize: 'medium',
    inputWidth: 'medium',
    inputPlaceholder: '',
    isRequired: false,
    optionsList: [
      { value: 'option1', text: 'Option 1' },
      { value: 'option2', text: 'Option 2' },
      { value: 'option3', text: 'Option 3' },
      { value: 'option4', text: 'Option 4' },
      { value: 'option5', text: 'Option 5' },
      { value: 'option6', text: 'Option 6' },
      { value: 'option7', text: 'Option 7' },
      { value: 'option8', text: 'Option 8' },
      { value: 'option9', text: 'Option 9' },
    ],
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
    hasSearch: {
      control: 'boolean',
    },
  },
} as Meta<SelectInputProps>

export const Primary: StoryObj<SelectInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
  },
}

export const Secondary: StoryObj<SelectInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    inputSize: 'small',
  },
}

export const Required: StoryObj<SelectInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    isRequired: true,
  },
}

export const Disabled: StoryObj<SelectInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    selectDisabled: true,
  },
}

export const WithIcon: StoryObj<SelectInputProps> = {
  args: {
    icon: <Cross />,
    inputPlaceholder: 'Placeholder',
  },
}

export const WithError: StoryObj<SelectInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    errorMessage: 'Mensagem de erro',
  },
}

export const FullWidth: StoryObj<SelectInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    inputWidth: 'full',
  },
}

export const PreSelectedValue: StoryObj<SelectInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    optionsList: [
      { value: 'option1', text: 'Option 1' },
      { value: 'option2', text: 'Option 2' },
      { value: 'option3', text: 'Option 3', selected: true },
      { value: 'option4', text: 'Option 4' },
      { value: 'option5', text: 'Option 5' },
    ],
  },
}

export const NoPlaceholder: StoryObj<SelectInputProps> = {
  args: {
    inputPlaceholder: '',
    optionsList: [
      { value: 'option1', text: 'Option 1' },
      { value: 'option2', text: 'Option 2' },
      { value: 'option3', text: 'Option 3' },
      { value: 'option4', text: 'Option 4' },
      { value: 'option5', text: 'Option 5' },
    ],
  },
}

export const WithSearch: StoryObj<SelectInputProps> = {
  args: {
    inputPlaceholder: 'Placeholder',
    hasSearch: true,
    optionsList: [
      { value: 'option1', text: 'Option 1' },
      { value: 'option2', text: 'Option 2' },
      { value: 'option3', text: 'Option 3' },
      { value: 'option4', text: 'Option 4' },
      { value: 'option5', text: 'Option 5' },
    ],
  },
}
