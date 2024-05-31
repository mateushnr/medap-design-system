import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@medap-ui/react'
import { CrossIcon } from 'lucide-react'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Enviar',
    variant: 'brand_primary',
    size: 'medium',
    width: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: [
        'brand_primary',
        'brand_secondary',
        'brand_secondary_light',
        'brand_gradient',
        'danger_primary',
        'danger_secondary',
      ],
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
    width: {
      options: ['default', 'medium', 'full'],
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

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'brand_primary',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'brand_secondary',
  },
}

export const SecondaryLight: StoryObj<ButtonProps> = {
  args: {
    variant: 'brand_secondary_light',
  },
}

export const BrandGradient: StoryObj<ButtonProps> = {
  args: {
    variant: 'brand_gradient',
  },
}

export const DangerPrimary: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger_primary',
  },
}

export const DangerSecondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger_secondary',
  },
}

export const WithIconRight: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Enviar <CrossIcon />
      </>
    ),
    variant: 'brand_primary',
  },
}

export const WithIconLeft: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <CrossIcon />
        Enviar
      </>
    ),
    variant: 'brand_primary',
  },
}
