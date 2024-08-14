import {
  ComponentProps,
  ReactNode,
  useState,
  useRef,
  forwardRef,
  ElementRef,
  useImperativeHandle,
  useEffect,
  useCallback,
} from 'react'
import {
  ErrorLabel,
  Select,
  InputSelect,
  Placeholder,
  SelectInputContainer,
  SelectOptionsContainer,
  OpenSelectOptionsIcon,
  Option,
  SelectedValue,
} from './styles'
import { ChevronDown } from 'lucide-react'
import { Text } from '../Text'

interface SelectOption {
  value: string
  text: string
  selected?: boolean
}

export interface SelectInputProps extends ComponentProps<typeof Select> {
  icon?: ReactNode | undefined
  errorMessage?: string
  inputSize?: 'small' | 'medium' | undefined
  inputWidth?: 'small' | 'medium' | 'large' | 'full' | undefined
  inputPlaceholder?: string
  controlledPlaceholderState?: boolean | undefined
  isRequired?: boolean
  optionsList?: SelectOption[] | undefined
  selectDisabled?: boolean | undefined
  handleSelectedInputChange?: (selectedValue: string) => void
}

interface PlaceholderVariantAttributesProps {
  placeholdersize: 'small' | 'medium' | 'iconsmall' | 'iconmedium'
}

export const SelectInput = forwardRef<
  ElementRef<typeof Select>,
  SelectInputProps
>(
  (
    {
      icon,
      errorMessage,
      inputSize,
      inputWidth,
      isRequired,
      inputPlaceholder,
      controlledPlaceholderState,
      optionsList,
      selectDisabled,
      handleSelectedInputChange,
      ...props
    }: SelectInputProps,
    ref,
  ) => {
    const inputRef = useRef<ElementRef<typeof Select>>(null)
    const inputContainerRef = useRef<HTMLDivElement>(null)
    const selectioOptionsRef = useRef<HTMLDivElement>(null)
    const [selectOptionsOpen, setSelectOptionsOpen] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<SelectOption>({
      value: '',
      text: '',
    })
    const [shouldSetDefaultSelectedOption, setShouldSetDefaultSelectedOption] =
      useState<boolean>(true)

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

    const [showPlaceholder, setShowPlaceholder] = useState<boolean>(
      controlledPlaceholderState !== undefined
        ? controlledPlaceholderState
        : !!Placeholder,
    )

    const handleSelectOptionsOutsideClick = (event: MouseEvent) => {
      if (
        selectioOptionsRef.current &&
        !selectioOptionsRef.current.contains(event.target as Node) &&
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target as Node)
      ) {
        setSelectOptionsOpen(false)
      }
    }

    const handleSelectInputClick = () => {
      setSelectOptionsOpen(!selectOptionsOpen)
    }

    const handleSelectOptionClick = (option: SelectOption) => {
      setSelectOptionsOpen(false)
      setSelectedOption(option)
      if (handleSelectedInputChange !== undefined) {
        handleSelectedInputChange(option.value)
      }
      setShowPlaceholder(false)
    }

    useEffect(() => {
      if (controlledPlaceholderState !== undefined)
        setShowPlaceholder(controlledPlaceholderState)
    }, [controlledPlaceholderState])

    const checkPreSelectedOption = useCallback(
      (optionsList: SelectOption[]) => {
        optionsList.forEach((option) => {
          if (option.selected) {
            if (handleSelectedInputChange !== undefined) {
              handleSelectedInputChange(option.value)
            }
            setSelectedOption(option)
            setShowPlaceholder(false)
          }
        })
      },
      [handleSelectedInputChange],
    )

    const checkNewSelectedOption = useCallback(
      (optionsList: SelectOption[]) => {
        optionsList.forEach((option) => {
          if (option.selected) {
            setSelectedOption(option)
            setShowPlaceholder(false)
          }
        })
      },
      [],
    )

    const checkFirstOption = useCallback(
      (optionsList: SelectOption[]) => {
        setSelectedOption(optionsList[0])
        if (handleSelectedInputChange !== undefined) {
          handleSelectedInputChange(optionsList[0].value)
        }
        setShowPlaceholder(false)
      },
      [handleSelectedInputChange],
    )

    useEffect(() => {
      if (optionsList && !shouldSetDefaultSelectedOption) {
        checkNewSelectedOption(optionsList)
      }
    }, [optionsList, shouldSetDefaultSelectedOption, checkNewSelectedOption])

    useEffect(() => {
      if (optionsList && shouldSetDefaultSelectedOption) {
        if (!inputPlaceholder) {
          checkFirstOption(optionsList)
        }
        checkPreSelectedOption(optionsList)

        setShouldSetDefaultSelectedOption(false)
      }

      document.addEventListener('mousedown', handleSelectOptionsOutsideClick)

      return () => {
        document.removeEventListener(
          'mousedown',
          handleSelectOptionsOutsideClick,
        )
      }
    }, [
      optionsList,
      inputPlaceholder,
      checkPreSelectedOption,
      checkFirstOption,
      shouldSetDefaultSelectedOption,
    ])

    return (
      <SelectInputContainer {...variantsAttributes}>
        <InputSelect
          ref={inputContainerRef}
          onClick={() => {
            if (!selectDisabled) handleSelectInputClick()
          }}
        >
          {icon || null}
          <SelectedValue
            ref={inputRef}
            value={selectedOption?.value}
            {...props}
          />
          <Select
            disabled={selectDisabled}
            readOnly
            value={selectedOption?.text}
          />
          {showPlaceholder ? (
            <Placeholder {...placeholderVariantsAttributes}>
              {inputPlaceholder}
              {isRequired ? <span>*</span> : null}
            </Placeholder>
          ) : null}

          <OpenSelectOptionsIcon optionsOpen={selectOptionsOpen}>
            <ChevronDown />
          </OpenSelectOptionsIcon>
        </InputSelect>

        <ErrorLabel>{errorMessage || null}</ErrorLabel>

        {selectOptionsOpen ? (
          <SelectOptionsContainer ref={selectioOptionsRef}>
            {optionsList
              ? optionsList.map((option) => {
                  return (
                    <Option
                      onClick={() => handleSelectOptionClick(option)}
                      key={option.value}
                      selected={selectedOption?.value === option.value}
                    >
                      <Text size={'medium'} color={'gray_800'}>
                        {option.text}
                      </Text>
                    </Option>
                  )
                })
              : null}
          </SelectOptionsContainer>
        ) : null}
      </SelectInputContainer>
    )
  },
)

SelectInput.displayName = 'SelectInput'
