import { styled } from '../../styles'

export const FontWeightsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$16',
})

export const FontWeight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const ExampleFontWeight = styled('p', {
  fontFamily: '"Roboto Mono", monospace !important',
  fontSize: '$8xlarge !important',
})

export const Name = styled('strong', {
  fontFamily: '"Roboto Mono", monospace !important',
  fontSize: '$2xlarge !important',
  color: '$gray_600',
})

export const Weight = styled('p', {
  fontFamily: '"Roboto Mono", monospace !important',
  fontSize: '$2xlarge !important',
})
