import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@medap-ui/react'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: '/avatarMedapDark.png',
    alt: 'Logo Medap',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Logo placeholder com símbolo de "mais" da saúde',
  },
}
