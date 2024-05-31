import { Name, FontFamiliesContainer, FontFamily, Family } from './FontFamilies'

interface FontFamily {
  name: string
  family: string
}

interface FontFamiliesProps {
  fontFamilies: FontFamily[]
}

export function FontFamilies({ fontFamilies }: FontFamiliesProps) {
  return (
    <FontFamiliesContainer>
      {fontFamilies.map((fontFamily) => {
        return (
          <FontFamily key={fontFamily.name}>
            <Family style={{ fontFamily: fontFamily.family }}>
              {fontFamily.family.split(',')[0]}
            </Family>
            <Name>${fontFamily.name}</Name>
          </FontFamily>
        )
      })}
    </FontFamiliesContainer>
  )
}
