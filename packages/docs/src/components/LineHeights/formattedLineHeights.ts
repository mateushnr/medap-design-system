import { lineHeights } from '@medap-ui/tokens'

export const formattedLineHeights = Object.entries(lineHeights).map(
  ([key, height]) => {
    return { name: key, height }
  },
)
