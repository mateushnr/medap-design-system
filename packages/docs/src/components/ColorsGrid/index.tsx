import { getContrast } from 'polished'
import { ColorContainer } from './ColorsGrid'

interface Color {
  name: string
  hex: string
}

interface ColorsGridProps {
  colors: Color[]
  isGradient: boolean
}

export function ColorsGrid({ colors, isGradient }: ColorsGridProps) {
  const resolveGradientTextColor = (gradient: string) => {
    const regex = /#[0-9A-Fa-f]{6}/g

    const hexValues = gradient.match(regex)

    if (hexValues != null) {
      return (
        hexValues.reduce((acc, cur) => {
          return acc + getContrast(cur, '#FFFFFF')
        }, 0) / hexValues.length
      )
    } else {
      return 0
    }
  }

  return colors.map((color) => {
    return !isGradient ? (
      <ColorContainer
        key={color.name}
        style={{
          backgroundColor: color.hex,
          color: resolveGradientTextColor(color.hex) < 3.5 ? '#000' : '#FFF',
        }}
      >
        <strong>${color.name}</strong>
        <span>{color.hex}</span>
      </ColorContainer>
    ) : (
      <ColorContainer
        key={color.name}
        style={{
          backgroundImage: color.hex,
          color: resolveGradientTextColor(color.hex) < 3.5 ? '#000' : '#FFF',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <strong>${color.name}</strong>
        <span>{color.hex}</span>
      </ColorContainer>
    )
  })
}
