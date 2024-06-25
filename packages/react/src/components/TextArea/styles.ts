import { styled } from '../../styles'

export const TextAreaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    textareasize: {
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

        '& > div > textarea': {
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

        '& > div > textarea': {
          fontSize: '$medium',
        },

        '& > span': {
          minHeight: 15,
          fontSize: '$small',
        },
      },
    },
    textareawidth: {
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
    textareaheight: {
      small: {
        '& > div': {
          height: 'fit-content',
        },
      },
      medium: {
        '& > div, & > div > textarea': {
          height: 120,
        },
        '& > div > textarea': {
          height: '95%',
        },
      },
    },
  },

  defaultVariants: {
    textareasize: 'medium',
    textareawidth: 'medium',
    textareaheight: 'small',
  },
})

export const InputTextArea = styled('div', {
  cursor: 'text',
  position: 'relative',
  backgroundColor: '$gray_50',
  borderRadius: '$small',
  boxSizing: 'border-box',
  border: '1px solid $gray_300',

  display: 'flex',
  alignItems: 'start',
  gap: '$3',

  svg: {
    position: 'relative',
    top: '1px',
  },

  '&:has(textarea:focus)': {
    outline: '2px solid $brand_600',
  },

  '&:has(textarea:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Textarea = styled('textarea', {
  fontFamily: '$default',
  background: 'transparent',
  color: '$gray_900',
  fontWeight: '$regular',
  border: 0,
  width: '100%',
  zIndex: 2,
  resize: 'none',

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
        top: '$2',
        left: 18,
        fontSize: '$small',
      },
      medium: {
        top: '$3',
        left: 22,
        fontSize: '$medium',
      },
      iconsmall: {
        top: '$2',
        left: 44,
        fontSize: '$small',
      },
      iconmedium: {
        top: '$3',
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
