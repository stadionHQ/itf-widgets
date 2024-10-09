import { ReactNode } from 'react'

export interface ButtonProps {
  text: string
  onClick: () => void
  iconEnd?: ReactNode
}
