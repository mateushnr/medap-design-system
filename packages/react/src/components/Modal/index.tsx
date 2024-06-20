import { X } from 'lucide-react'
import { CloseButton, ModalContent, ModalHeader, ModalWrapper } from './styles'
import { ComponentProps, ReactNode, useEffect, useRef } from 'react'

export interface ModalProps extends ComponentProps<typeof ModalContent> {
  children: ReactNode
  childrenTitle: ReactNode
  modalOpen: boolean
  closeModal: () => void
  variant?: string
}

export function Modal({
  children,
  childrenTitle,
  modalOpen,
  closeModal,
  variant,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal()
      }
    }

    if (modalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [modalOpen, closeModal])

  return (
    <div>
      {modalOpen ? (
        <>
          <ModalContent ref={modalRef}>
            {variant === 'withHeader' ? (
              <ModalHeader>
                {childrenTitle}
                <CloseButton variant={'withHeader'} onClick={closeModal}>
                  <X size={24} strokeWidth={2.5} />
                </CloseButton>
              </ModalHeader>
            ) : null}
            {children}
            {variant === 'withHeader' ? null : (
              <CloseButton onClick={closeModal}>
                <X size={20} strokeWidth={2.5} />
              </CloseButton>
            )}
          </ModalContent>
          <ModalWrapper />
        </>
      ) : null}
    </div>
  )
}
