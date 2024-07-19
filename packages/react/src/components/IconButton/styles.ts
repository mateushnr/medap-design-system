import { keyframes, styled } from '../../styles'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const IconButtonContainer = styled('button', {
  all: 'unset',
  borderRadius: '$small',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  '&:not(:disabled):focus': {
    boxShadow: '0 0 0 2px $brand_600',
  },

  variants: {
    variant: {
      icon_brand: {
        backgroundColor: '$brand_100',

        svg: {
          color: '$brand_700',
        },

        '&:not(:disabled):hover': {
          transition: 'background 0.5s, color 0.5s',
          background: '$brand_300',

          svg: {
            transition: 'color 0.5s',
            color: '$gray_800',
          },
        },

        '&:disabled': {
          filter: 'grayscale(60%)',
          cursor: 'not-allowed',
        },
      },
      icon_danger: {
        backgroundColor: '$danger_200',

        svg: {
          color: '$danger_700',
        },

        '&:not(:disabled):hover': {
          transition: 'background 0.5s, color 0.5s',
          background: '$danger_400',

          svg: {
            transition: 'color 0.5s',
            color: '$gray_800',
          },
        },

        '&:disabled': {
          filter: 'grayscale(60%)',
          cursor: 'not-allowed',
        },
      },
      icon_warning: {
        backgroundColor: '$warning_100',

        svg: {
          color: '$warning_700',
        },

        '&:not(:disabled):hover': {
          transition: 'background 0.5s, color 0.5s',
          background: '$warning_300',

          svg: {
            transition: 'color 0.5s',
            color: '$gray_800',
          },
        },

        '&:disabled': {
          filter: 'grayscale(60%)',
          cursor: 'not-allowed',
        },
      },
    },

    size: {
      small: {
        padding: '$1',

        svg: {
          width: '$4',
          height: '$4',
        },
      },
      medium: {
        padding: '6px',

        svg: {
          width: '$5',
          height: '$5',
        },
      },
      big: {
        padding: '$2',

        svg: {
          width: '$6',
          height: '$6',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'icon_brand',
    size: 'medium',
  },
})

export const SpinLoader = styled('span', {
  position: 'absolute',
  border: '3px solid $gray_200',
  borderTop: '3px solid #3498db',
  borderRadius: '50%',
  width: '8px',
  height: '8px',
  animation: `${spin} 1.5s linear infinite`,
})

export const HiddenText = styled('span', {
  visibility: 'hidden',
  lineHeight: 0,
})
