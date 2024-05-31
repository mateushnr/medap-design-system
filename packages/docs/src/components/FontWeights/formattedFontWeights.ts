import { fontWeights } from '@medap-ui/tokens'

export const formattedFontWeights = Object.entries(fontWeights).map(
  ([key, weight]) => {
    return { name: key, weight }
  },
)
