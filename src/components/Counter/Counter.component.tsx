import { useState } from 'react'
import { CounterButton } from './Counter.styles'

interface CounterProps {
  text?: string
}

export const Counter = ({ text }: CounterProps) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>
        Count: {count} {text ? `+ ${text}` : ''}
      </p>
      <CounterButton onClick={() => setCount(count + 1)}>
        Increment
      </CounterButton>
    </div>
  )
}
