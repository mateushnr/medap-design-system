import { fontSizes } from '@medap-ui/tokens'

export const formattedFontSizes = Object.entries(fontSizes).map(
  ([key, size]) => {
    return { name: key, size }
  },
)
