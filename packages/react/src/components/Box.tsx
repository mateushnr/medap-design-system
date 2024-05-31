import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  variants: {
    variant: {
      box_primary: {
        borderRadius: '$large',
        backgroundColor: '$white',
        boxShadow: '0 0 10px 0 rgb(0,0,0, 0.1)',
      },
      box_secondary: {
        borderRadius: '$medium',
        backgroundColor: '$gray_50',
        border: '1px solid $gray_200',
      },
    },
    width: {
      default: {
        width: 'fit-content',
      },
      full: {
        maxWidth: '100%',
      },
    },
    size: {
      small: {
        padding: '$6',
      },
      medium: {
        padding: '$8',
      },
      big: {
        padding: '$10',
      },
    },
  },

  defaultVariants: {
    variant: 'box_primary',
    width: 'default',
    size: 'medium',
  },
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
