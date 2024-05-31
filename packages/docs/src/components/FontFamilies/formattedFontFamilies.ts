import { fonts } from '@medap-ui/tokens'

export const formattedFontFamilies = Object.entries(fonts).map(
  ([key, family]) => {
    return { name: key, family }
  },
)
