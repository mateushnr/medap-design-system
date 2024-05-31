import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@medap-ui/react'

export default {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: 'Elemento de caixa',
    variant: 'box_primary',
    width: 'default',
    size: 'medium',
  },
  argTypes: {
    variant: {
      options: ['box_primary', 'box_secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    width: {
      options: ['default', 'full'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['small', 'medium', 'big'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const Secondary: StoryObj<BoxProps> = {
  args: {
    variant: 'box_secondary',
  },
}
