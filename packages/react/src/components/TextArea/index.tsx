import { ComponentProps } from 'react'
import { TextAreaContainer, TextAreaInput } from './styles'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {}

export function TextArea() {
  return <TextAreaContainer></TextAreaContainer>
}

TextArea.displayName = 'TextArea'
