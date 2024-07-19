import { ButtonContainer, HiddenText, SpinLoader } from './styles'
import { ComponentProps, ElementType, ReactNode } from 'react'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  as?: ElementType
  isLoading?: boolean
  children: ReactNode
}

export function Button({ isLoading, children, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {isLoading ? (
        <>
          <SpinLoader />
          <HiddenText>{children}</HiddenText>
        </>
      ) : (
        children
      )}
    </ButtonContainer>
  )
}

Button.displayName = 'Button'
