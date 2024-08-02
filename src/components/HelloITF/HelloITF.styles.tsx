import { styled } from 'styled-components'

export const HelloITFText = styled.h1<{ $colorText?: boolean }>`
  color: ${(props) => (props.$colorText ? 'green' : 'inherit')};
`
