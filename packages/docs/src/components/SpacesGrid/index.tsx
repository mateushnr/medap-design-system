import { Space, SpaceTable, SpaceTableBody, SpaceTableHead } from './SpacesGrid'

interface Space {
  name: string
  pixel: string
  rem: string
}

interface SpacesGridProps {
  spaces: Space[]
}

export function SpacesGrid({ spaces }: SpacesGridProps) {
  return (
    <SpaceTable>
      <SpaceTableHead>
        <tr>
          <th>Nome</th>
          <th>Pixel</th>
          <th>Rem</th>
          <th>Espaço</th>
        </tr>
      </SpaceTableHead>
      <SpaceTableBody>
        {spaces.map((space) => {
          return (
            <tr key={space.name}>
              <td>${space.name}</td>
              <td>{space.pixel}px</td>
              <td>{space.rem}rem</td>
              <td>
                <Space style={{ height: space.pixel }} />
              </td>
            </tr>
          )
        })}
      </SpaceTableBody>
    </SpaceTable>
  )
}
