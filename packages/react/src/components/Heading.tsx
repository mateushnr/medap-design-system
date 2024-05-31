import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  all: 'unset',
  fontFamily: '$heading',
  lineHeight: '$short',

  variants: {
    size: {
      medium: { fontSize: '$medium' },
      xlarge: { fontSize: '$xlarge' },
      '2xlarge': { fontSize: '$2xlarge' },
      '4xlarge': { fontSize: '$4xlarge' },
      '6xlarge': { fontSize: '$6xlarge' },
      '8xlarge': { fontSize: '$8xlarge' },
    },
    color: {
      brand_base: { color: '#47B75F' },

      brand_light: { color: '#FEFFFC' },
      brand_100: { color: '#F1F3DA' },
      brand_200: { color: '#C6E1A7' },
      brand_300: { color: '#A7D88E' },
      brand_400: { color: '#84CD76' },

      brand_550: { color: '#3A9B5F' },
      brand_600: { color: '#2D7F5A' },
      brand_700: { color: '#216150' },
      brand_800: { color: '#16433F' },
      brand_dark: { color: '#0C2325' },

      white: { color: '#FFFFFF' },
      gray_50: { color: '#F9F9F9' },
      gray_100: { color: '#EFEFEF' },
      gray_200: { color: '#DBDBDB' },
      gray_300: { color: '#CBCBCB' },
      gray_400: { color: '#B6B6B6' },
      gray_500: { color: '#838383' },
      gray_600: { color: '#585858' },
      gray_700: { color: '#393939' },
      gray_800: { color: '#212121' },
      gray_900: { color: '#121212' },
      black: { color: '#000000' },

      danger_200: { color: '#FECACA' },
      danger_400: { color: '#F77272' },
      danger_500: { color: '#EE4545' },
      danger_600: { color: '#DB2929' },
      danger_700: { color: '#B81D1D' },

      warning_100: { color: '#FCF3C5' },
      warning_300: { color: '#F7D14D' },
      warning_400: { color: '#F2B91C' },
      warning_500: { color: '#E2A110' },
      warning_700: { color: '#C37C0B' },
    },
    fontWeight: {
      light: { fontWeight: '300' },
      regular: { fontWeight: '400' },
      black: { fontWeight: '900' },
    },
  },

  defaultVariants: {
    size: 'xlarge',
    color: 'black',
    fontWeight: 'regular',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Text'
