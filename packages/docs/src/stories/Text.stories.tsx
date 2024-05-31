import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@medap-ui/react'

export default {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis, praesentium magni, repudiandae rem voluptatum a nesciunt sunt quos quaerat molestiae, in totam.',
    size: 'medium',
    color: 'black',
    fontWeight: 'regular',
    lineHeight: 'base',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'xlarge', '2xlarge', '4xlarge'],
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
    lineHeight: {
      options: ['base', 'tall'],
      control: 'inline-radio',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const customTag: StoryObj<TextProps> = {
  args: {
    children: 'Texto com tag customizada para <strong>',
    as: 'strong',
  },
}

export const customColor: StoryObj<TextProps> = {
  args: {
    children: 'Cor do texto customizada',
    color: 'brand_base',
  },
}

export const customSize: StoryObj<TextProps> = {
  args: {
    children: 'Tamanho de texto customizado',
    size: '2xlarge',
  },
}

export const customFontWeight: StoryObj<TextProps> = {
  args: {
    children: 'Peso da fonte customizado',
    fontWeight: 'black',
  },
}

export const customLineHeight: StoryObj<TextProps> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti neque modi expedita est eos incidunt dicta sit sequi placeat quibusdam, numquam non a praesentium nesciunt debitis harum voluptatem! Odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti neque modi expedita est eos incidunt dicta sit sequi placeat quibusdam, numquam non a praesentium nesciunt debitis harum voluptatem! Odit. ',
    lineHeight: 'tall',
  },
}
