import { Tournament } from 'molecules'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'translations/i18n'

const initWidgets = () => {
  // Find all divs with data-stadion-... attributes
  const tournaments = document.querySelectorAll('div[data-stadion-tournament]')

  // Create a React root for each widget
  tournaments.forEach((tournament) => {
    const id =
      (tournament as HTMLElement).getAttribute('data-tournament-id') ??
      undefined
    const queryClient = new QueryClient()
    const root = ReactDOM.createRoot(tournament)
    root.render(
      <QueryClientProvider client={queryClient}>
        <Tournament id={id} />
      </QueryClientProvider>,
    )
  })
}

// Initialise widgets when the script loads
document.addEventListener('DOMContentLoaded', initWidgets)
initWidgets()
