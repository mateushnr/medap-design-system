import { styled } from '../../styles'

export const ColorContainer = styled('div', {
  padding: '$6',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 $8',

  '& > *': {
    fontFamily: '"Roboto Mono", monospace',
  },
})
