import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@medap-ui/react'

export default {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],

  args: {
    children: 'Título',
    size: 'xlarge',
    color: 'black',
    fontWeight: 'regular',
  },
  argTypes: {
    size: {
      options: ['medium', 'xlarge', '2xlarge', '4xlarge', '6xlarge', '8xlarge'],
      control: 'inline-radio',
    },
    color: {
      options: [
        'brand_base',
        'brand_light',
        'brand_100',
        'brand_200',
        'brand_300',
        'brand_400',
        'brand_550',
        'brand_600',
        'brand_700',
        'brand_800',
        'brand_dark',
        'white',
        'gray_50',
        'gray_100',
        'gray_200',
        'gray_300',
        'gray_400',
        'gray_500',
        'gray_600',
        'gray_700',
        'gray_800',
        'gray_900',
        'black',
        'danger_200',
        'danger_400',
        'danger_500',
        'danger_600',
        'danger_700',
        'warning_100',
        'warning_300',
        'warning_400',
        'warning_500',
        'warning_700',
      ],
      control: 'inline-radio',
    },
    fontWeight: {
      options: ['light', 'regular', 'black'],
      control: 'inline-radio',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    children: 'Título padrão',
  },
}

export const customTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Título com tag customizada para <h1>',
    as: 'h1',
  },
}

export const customColor: StoryObj<HeadingProps> = {
  args: {
    children: 'Cor do título customizada',
    color: 'brand_base',
  },
}

export const customSize: StoryObj<HeadingProps> = {
  args: {
    children: 'Tamanho do título customizado',
    size: '8xlarge',
  },
}

export const customFontWeight: StoryObj<HeadingProps> = {
  args: {
    children: 'Peso da fonte customizado',
    fontWeight: 'black',
  },
}
