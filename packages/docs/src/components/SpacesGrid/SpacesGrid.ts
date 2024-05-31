import { styled } from '../../styles'

export const SpaceTable = styled('table', {
  width: '100%',
  border: 'none !important',
})

export const SpaceTableHead = styled('thead', {
  '& > tr, & > tr > th ': {
    textAlign: 'left',
    border: 'none !important',
  },
  '& > tr': {
    fontSize: '1rem',
  },
})

export const SpaceTableBody = styled('tbody', {
  '& > tr': {
    border: 'none !important',
    backgroundColor: 'transparent !important',
  },

  '& > tr > td': {
    border: 'none !important',
    verticalAlign: 'end',
    fontFamily: '"Roboto Mono", monospace',
  },

  '& > tr > td:not(:last-child)': {
    width: 70,
  },
})

export const Space = styled('span', {
  backgroundColor: '$gray_700',
  display: 'block',
  width: '100%',
})
