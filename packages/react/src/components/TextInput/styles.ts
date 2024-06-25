import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    inputsize: {
      small: {
        gap: '$1',

        '& > div': {
          padding: '6px $4',

          svg: {
            width: '$4',
            height: '$4',
            color: '$gray_600',
          },
        },

        '& > div > input': {
          fontSize: '$small',
        },

        '& > span': {
          minHeight: 14,
          fontSize: 10,
        },
      },
      medium: {
        gap: '$2',

        '& > div': {
          padding: '10px $5',

          svg: {
            width: '$5',
            height: '$5',
            color: '$gray_600',
          },
        },

        '& > div > input': {
          fontSize: '$medium',
        },

        '& > span': {
          minHeight: 15,
          fontSize: '$small',
        },
      },
    },
    inputwidth: {
      small: {
        '& > div': {
          maxWidth: 130,
        },
      },
      medium: {
        '& > div': {
          maxWidth: 240,
        },
      },
      large: {
        '& > div': {
          maxWidth: 440,
        },
      },
      full: {
        '& > div': {
          maxWidth: '100%',
        },
      },
    },
  },

  defaultVariants: {
    inputsize: 'medium',
    inputwidth: 'medium',
  },
})

export const InputText = styled('div', {
  cursor: 'text',
  position: 'relative',
  backgroundColor: '$gray_50',
  borderRadius: '$small',
  boxSizing: 'border-box',
  border: '1px solid $gray_300',

  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  '&:has(input:focus)': {
    outline: '2px solid $brand_600',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  background: 'transparent',
  color: '$gray_900',
  fontWeight: '$regular',
  border: 0,
  width: '100%',
  zIndex: 2,

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray_500',
  },
})

export const Placeholder = styled('span', {
  position: 'absolute',
  color: '$gray_500',
  fontFamily: '$default',
  background: 'transparent',
  fontWeight: '$light',

  '& > span': {
    marginLeft: 2,
    color: '$danger_400',
  },

  variants: {
    placeholdersize: {
      small: {
        left: 18,
        fontSize: '$small',
      },
      medium: {
        left: 22,
        fontSize: '$medium',
      },
      iconsmall: {
        left: 44,
        fontSize: '$small',
      },
      iconmedium: {
        left: 50,
        fontSize: '$medium',
      },
    },
  },

  defaultVariants: {
    placeholdersize: 'medium',
  },
})

export const ErrorLabel = styled('span', {
  display: 'block',
  fontFamily: '$default',
  color: '$danger_500',
  fontWeight: '$light',
})
