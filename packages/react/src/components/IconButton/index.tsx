import { HiddenText, IconButtonContainer, SpinLoader } from './styles'
import { ComponentProps, ElementType, ReactNode } from 'react'

export interface IconButtonProps
  extends ComponentProps<typeof IconButtonContainer> {
  as?: ElementType
  isLoading?: boolean
  children: ReactNode
}

export function IconButton({ isLoading, children, ...props }: IconButtonProps) {
  return (
    <IconButtonContainer {...props}>
      {isLoading ? (
        <>
          <SpinLoader />
          <HiddenText>{children}</HiddenText>
        </>
      ) : (
        children
      )}
    </IconButtonContainer>
  )
}

IconButton.displayName = 'IconButton'
