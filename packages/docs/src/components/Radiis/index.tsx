import { RadiisContainer, Radii, ExampleRadii, Name, Pixel } from './Radiis'

interface Radii {
  name: string
  pixel: string
}

interface RadiisProps {
  radiis: Radii[]
}

export function Radiis({ radiis }: RadiisProps) {
  return (
    <RadiisContainer>
      {radiis.map((radii) => {
        return (
          <Radii key={radii.name}>
            <ExampleRadii style={{ borderRadius: radii.pixel }} />
            <Name>${radii.name}</Name>
            <Pixel>{radii.pixel}</Pixel>
          </Radii>
        )
      })}
    </RadiisContainer>
  )
}
