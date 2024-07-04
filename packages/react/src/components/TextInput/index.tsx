import {
  ChangeEvent,
  ComponentProps,
  ReactNode,
  useState,
  useRef,
  forwardRef,
  ElementRef,
  useImperativeHandle,
} from 'react'
import {
  ErrorLabel,
  Input,
  InputText,
  Placeholder,
  TextInputContainer,
} from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  icon?: ReactNode | undefined
  errorMessage?: string
  inputSize?: 'small' | 'medium' | undefined
  inputWidth?: 'small' | 'medium' | 'large' | 'full' | undefined
  inputPlaceholder?: string
  isRequired?: boolean
}

interface PlaceholderVariantAttributesProps {
  placeholdersize: 'small' | 'medium' | 'iconsmall' | 'iconmedium'
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    {
      icon,
      errorMessage,
      inputSize,
      inputWidth,
      isRequired,
      inputPlaceholder,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    const inputRef = useRef<ElementRef<typeof Input>>(null)

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const variantsAttributes = {
      inputsize: inputSize,
      inputwidth: inputWidth,
    }

    const placeholderVariantsAttributes: PlaceholderVariantAttributesProps = {
      placeholdersize: 'medium',
    }

    if (inputSize === 'small') {
      placeholderVariantsAttributes.placeholdersize = 'small'
    }

    if (icon) {
      if (inputSize === 'small') {
        placeholderVariantsAttributes.placeholdersize = 'iconsmall'
      } else {
        placeholderVariantsAttributes.placeholdersize = 'iconmedium'
      }
    }

    const [showPlaceholder, setShowPlaceholder] =
      useState<boolean>(!!inputPlaceholder)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (inputPlaceholder) {
        if (e.target.value) setShowPlaceholder(false)
        else setShowPlaceholder(true)
      }
    }

    const handleTextInputClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    return (
      <TextInputContainer {...variantsAttributes}>
        <InputText onClick={handleTextInputClick}>
          {icon || null}
          <Input ref={inputRef} onChange={handleInputChange} {...props} />
          {showPlaceholder ? (
            <Placeholder {...placeholderVariantsAttributes}>
              {inputPlaceholder}
              {isRequired ? <span>*</span> : null}
            </Placeholder>
          ) : null}
        </InputText>
        <ErrorLabel>{errorMessage || null}</ErrorLabel>
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
