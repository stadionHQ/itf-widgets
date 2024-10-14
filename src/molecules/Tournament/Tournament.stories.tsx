import type { Meta, StoryObj } from '@storybook/react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Tournament as TournamentComponent } from './Tournament.component'

const queryClient = new QueryClient()

const meta = {
  title: 'Molecules / Tournament',
  component: TournamentComponent,
  args: {
    eventId: '6d102e78-dacd-463b-a17f-5e0404711e19',
    name: 'TOURNAMENT NAME',
    location: { city: 'City', country: 'Country' },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof TournamentComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Tournament: Story = {}
