import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Counter, HelloITF } from './components'

const initWidgets = () => {
  // Find all divs with data-itf-... attributes
  const counterWidgets = document.querySelectorAll(
    'div[data-itf-widget-counter]',
  )
  const helloITFWidgets = document.querySelectorAll(
    'div[data-itf-widget-hello-itf]',
  )

  // Create a React root for each widget
  counterWidgets.forEach((widget) => {
    const text = (widget as HTMLElement).getAttribute('data-text')
    const root = ReactDOM.createRoot(widget)
    root.render(<Counter text={text ?? undefined} />)
  })
  helloITFWidgets.forEach((widget) => {
    const colorText = (widget as HTMLElement).getAttribute('data-color-text')
    const queryClient = new QueryClient()
    const root = ReactDOM.createRoot(widget)
    root.render(
      <QueryClientProvider client={queryClient}>
        <HelloITF colorText={colorText === '' || colorText === 'true'} />
      </QueryClientProvider>,
    )
  })
}

// Initialise widgets when the script loads
document.addEventListener('DOMContentLoaded', initWidgets)
