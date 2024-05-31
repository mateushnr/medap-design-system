import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  all: 'unset',
  fontFamily: '$default',
  borderRadius: '$small',
  textAlign: 'center',
  fontWeight: '$regular',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  '&:not(:disabled):focus': {
    outline: '2px solid $brand_600',
  },

  variants: {
    variant: {
      brand_primary: {
        backgroundColor: '$brand_550',
        color: '$white',

        '&:not(:disabled):hover': {
          transition: 'background 0.5s',
          backgroundColor: '$brand_600',
        },

        '&:disabled': {
          backgroundColor: '$brand_400',
          color: '$gray_50',
          cursor: 'not-allowed',
        },
      },
      brand_secondary: {
        backgroundColor: 'transparent',
        color: '$brand_600',
        border: '2px solid $brand_600',

        '&:not(:disabled):hover': {
          transition: 'border 0.5s, color 0.5s',
          border: '2px solid $brand_800',
          color: '$brand_800',
        },

        '&:disabled': {
          border: '2px solid $brand_300',
          color: '$brand_300',
          cursor: 'not-allowed',
        },
      },
      brand_secondary_light: {
        backgroundColor: 'transparent',
        color: '$brand_100',
        border: '2px solid $brand_100',

        '&:not(:disabled):hover': {
          transition: 'border 0.5s, color 0.5s',
          border: '2px solid $brand_300',
          color: '$brand_300',
        },

        '&:disabled': {
          border: '2px solid $gray_200',
          color: '$gray_200',
          cursor: 'not-allowed',
        },
      },
      brand_gradient: {
        backgroundImage: '$gradient_brand_base',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundImage: 'none',
          backgroundColor: '$brand_550',
        },

        '&:disabled': {
          filter: 'grayscale(60%)',
          color: '$gray_50',
          cursor: 'not-allowed',
        },
      },
      danger_primary: {
        backgroundColor: '$danger_600',
        color: '$white',

        '&:not(:disabled):hover': {
          transition: 'background 0.5s',
          backgroundColor: '$danger_700',
        },

        '&:disabled': {
          backgroundColor: '$danger_400',
          color: '$gray_50',
          cursor: 'not-allowed',
        },
      },
      danger_secondary: {
        backgroundColor: 'transparent',
        color: '$danger_600',
        border: '2px solid $danger_600',

        '&:not(:disabled):hover': {
          transition: 'border 0.5s, color 0.5s',
          border: '2px solid $danger_700',
          color: '$danger_700',
        },

        '&:disabled': {
          border: '2px solid $danger_400',
          color: '$danger_400',
          cursor: 'not-allowed',
        },
      },
    },

    size: {
      small: {
        fontSize: '$small',
        padding: '6px $3',

        svg: {
          width: 14,
          height: 14,
        },
      },
      medium: {
        fontSize: '$medium',
        padding: '$2 $4',

        svg: {
          width: '$4',
          height: '$4',
        },
      },
      big: {
        fontSize: '$xlarge',
        padding: '$2 $4',

        svg: {
          width: '$5',
          height: '$5',
        },
      },
    },

    width: {
      default: {
        width: 'fit-content',
      },
      medium: {
        minWidth: 200,
      },
      full: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    variant: 'brand_primary',
    size: 'medium',
    width: 'default',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
