import { radii } from '@medap-ui/tokens'

export const formattedRadiis = Object.entries(radii).map(([key, pixel]) => {
  return { name: key, pixel }
})
