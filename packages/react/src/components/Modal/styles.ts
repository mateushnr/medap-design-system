import { styled, keyframes } from '../../styles'

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const scaleUp = keyframes({
  '0%': { transform: 'translate(-50%, -50%) scale(0.5)' },
  '100%': { transform: 'translate(-50%, -50%) scale(1)' },
})

export const ModalContent = styled('div', {
  backgroundColor: '$white',
  padding: '$8',
  marginBottom: '$8',
  borderRadius: '$small',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 20,

  animation: `${fadeIn} 0.2s ease-in-out, ${scaleUp} 0.2s ease-in-out`,

  '@bp3': {
    top: '10%',
    left: '10%',
    maxWidth: '100%',
    transform: 'translate(-5%, -5%)',
  },
})

export const ModalWrapper = styled('div', {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  width: '100%',
  height: '100%',

  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 10,
})

export const CloseButton = styled('button', {
  background: 'none',
  width: 'fit-content',
  borderRadius: '$small',
  border: 'none',
  cursor: 'pointer',
  padding: 0,

  svg: {
    verticalAlign: 'middle',
    color: '$gray_300',
  },

  '&:hover': {
    backgroundColor: '$gray_100',
    svg: {
      color: '$gray_400',
    },
  },

  variants: {
    variant: {
      default: {
        position: 'absolute',
        top: '$2',
        left: 'calc(100% - $2)',
        transform: 'translate(-100%)',
      },
      withHeader: {
        height: 'fit-content',
        padding: '$1',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export const ModalHeader = styled('header', {
  display: 'flex',
  gap: '$2',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '$3',
  borderBottom: '2px solid $gray_100',
  marginBottom: '$8',
})
