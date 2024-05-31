import { space } from '@medap-ui/tokens'

export const formattedSpaces = Object.entries(space).map(([name]) => {
  return { name, pixel: Number(name) * 4, rem: Number(name) / 4 }
})
