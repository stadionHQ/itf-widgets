import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = ({ text, onClick, iconEnd }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
      {iconEnd ? iconEnd : null}
    </StyledButton>
  )
}
