import { styled } from '../../styles'

export const FontSizesTable = styled('table', {
  width: '100%',
  gap: '$2',
  border: 'none !important',

  '& > tbody > tr, & > tbody > tr > td, & > tbody > tr > th': {
    border: 'none !important',
    fontFamily: '"Roboto Mono", monospace',
  },

  '& > tbody > tr > th': {
    textAlign: 'left',
    color: 'gray_700 !important',
  },

  '& > tbody > tr:not(:first-child)': {
    backgroundColor: '$gray_100 !important',
  },
})
