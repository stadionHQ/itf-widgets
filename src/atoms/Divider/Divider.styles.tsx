import { styled } from 'styled-components'
import { DividerDirection } from './Divider.types'

export const StyledDivider = styled.div<{ $direction: DividerDirection }>`
  background: #d9d9d9;

  ${(props) =>
    props.$direction === DividerDirection.HORIZONTAL
      ? `
  width: 100%;
  height: 1px;
  `
      : ''}

  ${(props) =>
    props.$direction === DividerDirection.VERTICAL
      ? `
  width: 1px;
  height: 100%;
  min-height: 32px;
  `
      : ''}
`
