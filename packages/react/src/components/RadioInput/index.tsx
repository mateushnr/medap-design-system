import {
  ComponentProps,
  ReactNode,
  useRef,
  forwardRef,
  ElementRef,
  useImperativeHandle,
} from 'react'
import {
  InputBox,
  InputDefault,
  InputRadio,
  Label,
  RadioInputBoxContainer,
  RadioInputDefaultContainer,
} from './styles'
import { Text } from '../Text'

export interface RadioInputProps extends ComponentProps<typeof InputDefault> {
  labelText: string
  radioId: string
  variant?: 'default' | 'box' | undefined
  radioSize?: 'small' | 'medium' | 'large' | undefined
  icon?: ReactNode | undefined
}

export const RadioInput = forwardRef<
  ElementRef<typeof InputDefault>,
  RadioInputProps
>(
  (
    { icon, radioSize, labelText, variant, radioId, ...props }: RadioInputProps,
    ref,
  ) => {
    const inputRef = useRef<ElementRef<typeof InputDefault>>(null)

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    if (!variant || variant === 'default') {
      return (
        <RadioInputDefaultContainer radioSize={radioSize}>
          <InputDefault type="radio" id={radioId} ref={inputRef} {...props} />
          <InputRadio radioSize={radioSize} htmlFor={radioId} />
          <Label htmlFor={radioId}>
            <Text>{labelText}</Text>
          </Label>
        </RadioInputDefaultContainer>
      )
    } else {
      return (
        <>
          <InputBox type="radio" id={radioId} ref={inputRef} {...props} />
          <RadioInputBoxContainer radioSize={radioSize} htmlFor={radioId}>
            {icon || null}
            <Text>{labelText}</Text>
          </RadioInputBoxContainer>
        </>
      )
    }
  },
)

RadioInput.displayName = 'RadioInput'
