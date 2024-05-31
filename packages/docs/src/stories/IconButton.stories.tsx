import type { StoryObj, Meta } from '@storybook/react'
import { IconButton, IconButtonProps } from '@medap-ui/react'
import { CrossIcon } from 'lucide-react'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    children: <CrossIcon />,
    variant: 'icon_brand',
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    variant: {
      options: ['icon_brand', 'icon_danger', 'icon_warning'],
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

    disabled: {
      control: {
        type: 'boolean',
      },
    },

    onClick: {
      action: 'click',
    },
  },
} as Meta

export const IconBrand: StoryObj<IconButtonProps> = {
  args: {
    variant: 'icon_brand',
  },
}

export const IconDanger: StoryObj<IconButtonProps> = {
  args: {
    variant: 'icon_danger',
  },
}

export const IconWarning: StoryObj<IconButtonProps> = {
  args: {
    variant: 'icon_warning',
  },
}
