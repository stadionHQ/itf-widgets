import type { Meta, StoryObj } from '@storybook/react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { TournamentList as TournamentListRenderer } from './TournamentList.component'

const queryClient = new QueryClient()

const meta = {
  title: 'Organisms / Tournament List',
  component: TournamentListRenderer,
  args: {},
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof TournamentListRenderer>

export default meta
type Story = StoryObj<typeof meta>

export const TournamentList: Story = {}
