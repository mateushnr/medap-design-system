import {
  ChangeEvent,
  ComponentProps,
  ElementRef,
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  ErrorLabel,
  InputTextArea,
  Placeholder,
  TextAreaContainer,
  Textarea,
} from './styles'

export interface TextAreaProps extends ComponentProps<typeof Textarea> {
  icon?: ReactNode | undefined
  errorMessage?: string
  textAreaSize?: 'small' | 'medium' | undefined
  textAreaWidth?: 'small' | 'medium' | 'large' | 'full' | undefined
  textAreaHeight?: 'small' | 'medium' | undefined
  textAreaPlaceholder?: string
  controlledPlaceholderState?: boolean | undefined
  isRequired?: boolean
}

interface PlaceholderVariantAttributesProps {
  placeholdersize: 'small' | 'medium' | 'iconsmall' | 'iconmedium'
}

export const TextArea = forwardRef<ElementRef<typeof Textarea>, TextAreaProps>(
  (
    {
      icon,
      errorMessage,
      textAreaSize,
      textAreaWidth,
      textAreaHeight,
      isRequired,
      textAreaPlaceholder,
      controlledPlaceholderState,
      ...props
    }: TextAreaProps,
    ref,
  ) => {
    const textAreaRef = useRef<ElementRef<typeof Textarea>>(null)

    useImperativeHandle(ref, () => textAreaRef.current as HTMLTextAreaElement)

    const variantsAttributes = {
      textareasize: textAreaSize,
      textareawidth: textAreaWidth,
      textareaheight: textAreaHeight,
    }

    const placeholderVariantsAttributes: PlaceholderVariantAttributesProps = {
      placeholdersize: 'medium',
    }

    if (textAreaSize === 'small') {
      placeholderVariantsAttributes.placeholdersize = 'small'
    }

    if (icon) {
      if (textAreaSize === 'small') {
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

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (textAreaPlaceholder) {
        if (e.target.value) setShowPlaceholder(false)
        else setShowPlaceholder(true)
      }
    }

    const handleTextAreaClick = () => {
      if (textAreaRef.current) {
        textAreaRef.current.focus()
      }
    }

    return (
      <TextAreaContainer {...variantsAttributes}>
        <InputTextArea onClick={handleTextAreaClick}>
          {icon || null}
          <Textarea
            ref={textAreaRef}
            onChange={handleTextAreaChange}
            {...props}
          ></Textarea>
          {showPlaceholder ? (
            <Placeholder {...placeholderVariantsAttributes}>
              {textAreaPlaceholder}
              {isRequired ? <span>*</span> : null}
            </Placeholder>
          ) : null}
        </InputTextArea>
        <ErrorLabel>{errorMessage || null}</ErrorLabel>
      </TextAreaContainer>
    )
  },
)

TextArea.displayName = 'TextArea'
