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
  ContainerShowPasswordOption,
  ErrorLabel,
  Input,
  InputText,
  Placeholder,
  TextInputContainer,
} from './styles'
import { Eye, EyeOff } from 'lucide-react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  icon?: ReactNode
  errorMessage?: string
  inputSize?: 'small' | 'medium'
  inputWidth?: 'small' | 'medium' | 'large' | 'full'
  inputPlaceholder?: string
  showPasswordOption?: boolean
  controlledPlaceholderState?: boolean
  isRequired?: boolean
  type?: string
}

interface PlaceholderVariantAttributesProps {
  placeholdersize: 'small' | 'medium' | 'iconsmall' | 'iconmedium'
}

interface showPasswordProps {
  show: boolean
  inputType: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    {
      icon,
      errorMessage,
      inputSize,
      inputWidth,
      isRequired,
      type,
      showPasswordOption,
      inputPlaceholder,
      controlledPlaceholderState,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    const inputRef = useRef<ElementRef<typeof Input>>(null)

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const defaultInputType = type || 'text'

    const [showPassword, setShowPassword] = useState<showPasswordProps>({
      show: false,
      inputType: defaultInputType,
    })

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

    const [showPlaceholder, setShowPlaceholder] = useState<boolean>(
      controlledPlaceholderState !== undefined
        ? controlledPlaceholderState
        : !!Placeholder,
    )

    useEffect(() => {
      if (controlledPlaceholderState !== undefined)
        setShowPlaceholder(controlledPlaceholderState)
    }, [controlledPlaceholderState])

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

    const handleShowPasswordChange = () => {
      setShowPassword((prev) => {
        if (prev.show) {
          return { show: !prev.show, inputType: defaultInputType }
        } else {
          return { show: !prev.show, inputType: 'text' }
        }
      })
    }

    return (
      <TextInputContainer {...variantsAttributes}>
        <InputText onClick={handleTextInputClick}>
          {icon || null}
          <Input
            ref={inputRef}
            onChange={handleInputChange}
            type={showPassword.inputType}
            {...props}
          />
          {showPlaceholder ? (
            <Placeholder {...placeholderVariantsAttributes}>
              {inputPlaceholder}
              {isRequired ? <span>*</span> : null}
            </Placeholder>
          ) : null}
          {showPasswordOption ? (
            <ContainerShowPasswordOption onClick={handleShowPasswordChange}>
              {showPassword.show ? <EyeOff /> : <Eye />}
            </ContainerShowPasswordOption>
          ) : null}
        </InputText>
        <ErrorLabel>{errorMessage || null}</ErrorLabel>
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
