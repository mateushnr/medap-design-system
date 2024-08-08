import type { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@medap-ui/react'
import { Cross } from 'lucide-react'

export default {
  title: 'Components/Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    errorMessage: '',
    textAreaSize: 'medium',
    textAreaWidth: 'medium',
    textAreaHeight: 'small',
    textAreaPlaceholder: 'Placeholder',
    isRequired: false,
  },
  argTypes: {
    textAreaSize: {
      options: ['small', 'medium'],
      control: 'inline-radio',
    },
    textAreaWidth: {
      options: ['small', 'medium', 'large', 'full'],
      control: 'inline-radio',
    },
    textAreaHeight: {
      options: ['small', 'medium'],
      control: 'inline-radio',
    },
    isRequired: {
      control: 'boolean',
    },
  },
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    textAreaPlaceholder: 'Placeholder',
  },
}

export const Secondary: StoryObj<TextAreaProps> = {
  args: {
    textAreaPlaceholder: 'Placeholder',
    textAreaSize: 'small',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    textAreaPlaceholder: 'Placeholder',
    disabled: true,
  },
}

export const WithIcon: StoryObj<TextAreaProps> = {
  args: {
    icon: <Cross />,
    textAreaPlaceholder: 'Placeholder',
  },
}

export const Required: StoryObj<TextAreaProps> = {
  args: {
    textAreaPlaceholder: 'Placeholder',
    isRequired: true,
  },
}

export const WithError: StoryObj<TextAreaProps> = {
  args: {
    textAreaPlaceholder: 'Placeholder',
    errorMessage: 'Mensagem de erro',
  },
}

export const FullWidth: StoryObj<TextAreaProps> = {
  args: {
    textAreaPlaceholder: 'Placeholder',
    textAreaWidth: 'full',
  },
}

export const Taller: StoryObj<TextAreaProps> = {
  args: {
    textAreaPlaceholder: 'Placeholder',
    textAreaHeight: 'medium',
  },
}
