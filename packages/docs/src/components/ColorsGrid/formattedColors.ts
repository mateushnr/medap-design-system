import { colors } from '@medap-ui/tokens'

const formattedColors = Object.entries(colors).map(([key, color]) => {
  return { name: key, hex: color }
})

export const brandColors = formattedColors.filter((color) => {
  return color.name.startsWith('brand')
})

export const grayColors = formattedColors.filter((color) => {
  return (
    color.name === 'white' ||
    color.name.startsWith('gray') ||
    color.name === 'black'
  )
})

export const dangerColors = formattedColors.filter((color) => {
  return color.name.startsWith('danger')
})

export const warningColors = formattedColors.filter((color) => {
  return color.name.startsWith('warning')
})

export const gradientColors = formattedColors.filter((color) => {
  return color.name.startsWith('gradient')
})
