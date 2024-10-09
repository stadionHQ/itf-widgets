import { StyledDivider } from './Divider.styles'
import { DividerProps } from './Divider.types'

export const Divider = ({ direction }: DividerProps) => {
  return <StyledDivider $direction={direction} />
}
