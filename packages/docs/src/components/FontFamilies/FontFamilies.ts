import { styled } from '../../styles'

export const FontFamiliesContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$16',
})

export const FontFamily = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const Family = styled('p', {
  fontSize: '$8xlarge !important',
})

export const Name = styled('strong', {
  fontFamily: '"Roboto Mono", monospace !important',
  fontSize: '$2xlarge !important',
  color: '$gray_600',
})
