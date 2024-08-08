import {
  ChangeEvent,
  ComponentProps,
  ReactNode,
  useState,
  useRef,
  forwardRef,
  ElementRef,
  useImperativeHandle,
  useEffect,
} from 'react'
import {
  ErrorLabel,
  Input,
  InputText,
  Placeholder,
  DateInputContainer,
} from './styles'

export interface DateInputProps extends ComponentProps<typeof Input> {
  icon?: ReactNode | undefined
  errorMessage?: string
  inputSize?: 'small' | 'medium' | undefined
  inputWidth?: 'medium' | 'large' | 'full' | undefined
  controlledPlaceholderState?: boolean | undefined
  isRequired?: boolean
}

interface PlaceholderVariantAttributesProps {
  placeholdersize: 'small' | 'medium' | 'iconsmall' | 'iconmedium'
}

export const DateInput = forwardRef<ElementRef<typeof Input>, DateInputProps>(
  (
    {
      icon,
      errorMessage,
      inputSize,
      inputWidth,
      isRequired,
      controlledPlaceholderState,
      ...props
    }: DateInputProps,
    ref,
  ) => {
    const inputRef = useRef<ElementRef<typeof Input>>(null)

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const [showRequiredPlaceholder, setShowRequiredPlaceholder] =
      useState<boolean>(!!isRequired)

    const [isPlaceholder, setIsPlaceholder] = useState<boolean>(true)

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

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) setIsPlaceholder(false)
      else setIsPlaceholder(true)

      if (isRequired) {
        if (e.target.value) setShowRequiredPlaceholder(false)
        else setShowRequiredPlaceholder(true)
      }
    }

    const handleTextInputClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    useEffect(() => {
      if (controlledPlaceholderState !== undefined)
        setShowRequiredPlaceholder(controlledPlaceholderState)
    }, [controlledPlaceholderState])

    return (
      <DateInputContainer {...variantsAttributes}>
        <InputText onClick={handleTextInputClick}>
          {icon || null}
          <Input
            isPlaceholder={isPlaceholder}
            type="date"
            ref={inputRef}
            onChange={handleInputChange}
            {...props}
          />
          {showRequiredPlaceholder ? (
            <Placeholder {...placeholderVariantsAttributes}>
              {isRequired ? <span>*</span> : null}
            </Placeholder>
          ) : null}
        </InputText>
        <ErrorLabel>{errorMessage || null}</ErrorLabel>
      </DateInputContainer>
    )
  },
)

DateInput.displayName = 'DateInput'
