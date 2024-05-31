import { styled } from '../../styles'

export const LineHeightsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$16',
})

export const LineHeight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const ExampleText = styled('p', {
  fontFamily: '"Roboto Mono", monospace !important',
  fontSize: '$medium !important',
})

export const Name = styled('strong', {
  fontFamily: '"Roboto Mono", monospace !important',
  fontSize: '$2xlarge !important',
  color: '$gray_600',
})

export const Height = styled('p', {
  fontFamily: '"Roboto Mono", monospace !important',
  fontSize: '$2xlarge !important',
})
