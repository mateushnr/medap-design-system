import type { StoryObj, Meta } from '@storybook/react'
import { Button, Heading, Modal, ModalProps, Text } from '@medap-ui/react'
import { useState } from 'react'

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    modalOpen: false,
    children: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Heading size={'4xlarge'}>Lorem ipsum dolor</Heading>{' '}
        <Text
          size={'medium'}
          style={{
            maxWidth: '60ch',
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt
          ab temporibus, quis modi eum architecto neque amet similique odit?
          Quasi magnam veniam ullam quas tempore blanditiis amet magni odit?
        </Text>
      </div>
    ),
  },
  argTypes: {
    variant: {
      options: ['default', 'withHeader'],
      control: {
        type: 'inline-radio',
      },
    },
    modalOpen: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    childrenHeader: {
      control: 'text',
    },
  },
  decorators: [
    (Story, { args }) => {
      const [modOpen, setModOpen] = useState<boolean>(args.modalOpen || false)

      const handleCloseModal = () => setModOpen(false)

      return (
        <>
          <Button
            onClick={() => {
              setModOpen(true)
            }}
          >
            Ativar modal
          </Button>
          <Story
            args={{ ...args, modalOpen: modOpen, closeModal: handleCloseModal }}
          />
        </>
      )
    },
  ],
} as Meta<ModalProps>

export const ModalDefault: StoryObj<ModalProps> = {}

export const ModalWithHeader: StoryObj<ModalProps> = {
  args: {
    variant: 'withHeader',
    children: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Text
          style={{
            maxWidth: '60ch',
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt
          ab temporibus, quis modi eum architecto neque amet similique odit?
          Quasi magnam veniam ullam quas tempore blanditiis amet magni odit.
        </Text>
        <Text
          style={{
            maxWidth: '60ch',
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          voluptatem qui repellat praesentium distinctio placeat numquam
          laboriosam. Libero quia sequi, esse consequuntur, dolorum dolor
          adipisci fugiat amet reprehenderit enim voluptatum!
        </Text>
      </div>
    ),
    childrenTitle: (
      <Heading size={'4xlarge'}>Lorem ipsum dolor sit amet</Heading>
    ),
  },
}
