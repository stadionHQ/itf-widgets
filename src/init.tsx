import { Tournament } from 'molecules'
import { JSONBlock } from 'organisms'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'translations/i18n'

const initWidgets = () => {
  // Find all divs with data-stadion-... attributes
  const tournaments = document.querySelectorAll('div[data-stadion-tournament]')
  const jsonBlocks = document.querySelectorAll('div[data-stadion-json-block]')

  // Create a React root for each widget
  tournaments.forEach((tournament) => {
    const eventId =
      (tournament as HTMLElement).getAttribute('data-event-id') ?? undefined
    const name =
      (tournament as HTMLElement).getAttribute('data-name') ?? undefined
    const locationCity =
      (tournament as HTMLElement).getAttribute('data-location-city') ??
      undefined
    const locationCountry =
      (tournament as HTMLElement).getAttribute('data-location-country') ??
      undefined
    const queryClient = new QueryClient()
    const root = ReactDOM.createRoot(tournament)
    root.render(
      <QueryClientProvider client={queryClient}>
        <Tournament
          eventId={eventId}
          name={name}
          location={{ city: locationCity, country: locationCountry }}
        />
      </QueryClientProvider>,
    )
  })

  jsonBlocks.forEach((jsonBlock) => {
    const url = (jsonBlock as HTMLElement).getAttribute('data-url') ?? undefined
    const refreshTime =
      (jsonBlock as HTMLElement).getAttribute('data-refresh-time') ?? undefined
    const queryClient = new QueryClient()
    const root = ReactDOM.createRoot(jsonBlock)
    root.render(
      <QueryClientProvider client={queryClient}>
        <JSONBlock
          url={url}
          refreshTime={
            isNaN(Number(refreshTime)) ? undefined : Number(refreshTime)
          }
        />
      </QueryClientProvider>,
    )
  })
}

// Initialise widgets when the script loads
document.addEventListener('DOMContentLoaded', initWidgets)
initWidgets()
