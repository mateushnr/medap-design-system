import {
  ExampleText,
  LineHeight,
  LineHeightsContainer,
  Name,
  Height,
} from './LineHeights'

interface LineHeight {
  name: string
  height: string
}

interface LineHeightsProps {
  lineHeights: LineHeight[]
}

export function LineHeights({ lineHeights }: LineHeightsProps) {
  return (
    <LineHeightsContainer>
      {lineHeights.map((lineHeight) => {
        return (
          <LineHeight key={lineHeight.name}>
            <ExampleText style={{ lineHeight: lineHeight.height }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              maxime dignissimos nulla aut ducimus earum tempore dolore amet?
              Quos rerum illum omnis velit rem fugiat commodi exercitationem
              modi repudiandae iusto?
            </ExampleText>
            <Name>${lineHeight.name}</Name>
            <Height>{lineHeight.height}</Height>
          </LineHeight>
        )
      })}
    </LineHeightsContainer>
  )
}
