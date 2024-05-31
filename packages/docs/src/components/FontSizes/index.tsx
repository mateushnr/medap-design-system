import { FontSizesTable } from './FontSizes'

interface FontSize {
  name: string
  size: string
}

interface FontSizesProps {
  fontSizes: FontSize[]
}

export function FontSizes({ fontSizes }: FontSizesProps) {
  return (
    <FontSizesTable>
      <tbody>
        <tr>
          <th>
            <strong>Exemplo</strong>
          </th>
          {fontSizes.map((fontSize) => {
            return (
              <td key={fontSize.name}>
                <strong style={{ fontSize: fontSize.size }}>aA</strong>
              </td>
            )
          })}
        </tr>
        <tr>
          <th>
            <strong>Nome</strong>
          </th>
          {fontSizes.map((fontSize) => {
            return (
              <td key={fontSize.name}>
                <strong>${fontSize.name}</strong>
              </td>
            )
          })}
        </tr>
        <tr>
          <th>
            <strong>Rem</strong>
          </th>
          {fontSizes.map((fontSize) => {
            return (
              <td key={fontSize.name}>
                <strong>{fontSize.size}</strong>
              </td>
            )
          })}
        </tr>
        <tr>
          <th>
            <strong>Pixel</strong>
          </th>
          {fontSizes.map((fontSize) => {
            return (
              <td key={fontSize.name}>
                <strong>{Number(fontSize.size.slice(0, -3)) * 16}px</strong>
              </td>
            )
          })}
        </tr>
      </tbody>
    </FontSizesTable>
  )
}
