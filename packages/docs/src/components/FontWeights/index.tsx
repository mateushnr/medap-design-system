import {
  ExampleFontWeight,
  FontWeight,
  FontWeightsContainer,
  Name,
  Weight,
} from './FontWeights'

interface FontWeight {
  name: string
  weight: string
}

interface FontWeightsProps {
  fontWeights: FontWeight[]
}

export function FontWeights({ fontWeights }: FontWeightsProps) {
  return (
    <FontWeightsContainer>
      {fontWeights.map((fontWeight) => {
        return (
          <FontWeight key={fontWeight.name}>
            <ExampleFontWeight style={{ fontWeight: fontWeight.weight }}>
              aA
            </ExampleFontWeight>
            <Name>${fontWeight.name}</Name>
            <Weight>{fontWeight.weight}</Weight>
          </FontWeight>
        )
      })}
    </FontWeightsContainer>
  )
}
