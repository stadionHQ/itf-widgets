import { styled } from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;

  background: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 999px;
  box-shadow: none;

  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #000037;

  transition: all 200ms;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`
