import { styled } from '../../styles'

export const RadiisContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$16',
})

export const Radii = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const ExampleRadii = styled('span', {
  display: 'block',
  height: '$20',
  width: '$20',
  backgroundColor: '$gray_700',
  marginBottom: '$4 !important',
})

export const Name = styled('strong', {
  fontFamily: '"Roboto Mono", monospace !important',
  fontSize: '$2xlarge !important',
  color: '$gray_600',
})

export const Pixel = styled('p', {
  fontFamily: '"Roboto Mono", monospace !important',
  fontSize: '$2xlarge !important',
})
