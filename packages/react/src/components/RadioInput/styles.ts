import { styled } from '../../styles'
import { Text } from '../Text'

export const RadioInputDefaultContainer = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',

  variants: {
    radioSize: {
      small: {
        '& > input:checked + label': {
          transition: 'border 0.1s, outline 0.1s',
          border: '3px solid $brand_400',
          outline: '2px solid $brand_200',
        },
      },
      medium: {
        '& > input:checked + label': {
          transition: 'border 0.1s, outline 0.1s',
          border: '4px solid $brand_400',
          outline: '2px solid $brand_200',
        },
      },
      large: {
        '& > input:checked + label': {
          transition: 'border 0.1s, outline 0.1s',
          border: '5px solid $brand_400',
          outline: '2px solid $brand_200',
        },
      },
    },
  },

  defaultVariants: {
    radioSize: 'medium',
  },
})

export const RadioInputBoxContainer = styled('label', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  background: '$brand_light',
  border: '2px solid $brand_700',
  width: 'fit-content',
  cursor: 'pointer',
  borderRadius: '$small',
  boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.02)',

  svg: {
    color: '$brand_800',
  },

  '&:hover': {
    transition: 'background 0.3s, border 0.3s',
    background: '$brand_100',
    border: '2px solid $brand_550',
  },

  variants: {
    radioSize: {
      small: {
        padding: '$3',
      },
      medium: {
        padding: '$4',
      },
      large: {
        padding: '$6',
      },
    },
  },

  defaultVariants: {
    radioSize: 'medium',
  },
})

export const InputDefault = styled('input', {
  display: 'none',
})

export const InputBox = styled('input', {
  display: 'none',

  '&:checked + label': {
    transition: 'background 0.3s',
    background: '$brand_600',
    border: 'none',
    cursor: 'default',

    [`${Text}`]: {
      color: '$white',
    },
    svg: {
      color: '$white',
    },
  },
})

export const InputRadio = styled('label', {
  outline: '2px solid $brand_300',
  boxSizing: 'border-box',
  width: 12,
  height: 12,
  borderRadius: '$full',

  variants: {
    radioSize: {
      small: { width: 12, height: 12 },
      medium: {
        width: 14,
        height: 14,
      },
      large: {
        width: 18,
        height: 18,
      },
    },
  },

  defaultVariants: {
    radioSize: 'medium',
  },
})

export const Label = styled('label', {})
