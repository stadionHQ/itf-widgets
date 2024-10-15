import type { Meta, StoryObj } from '@storybook/react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { JSONBlock as JSONBlockComponent } from './JSONBlock.component'

const queryClient = new QueryClient()

const meta = {
  title: 'Organisms / JSON Block',
  component: JSONBlockComponent,
  args: {
    url: 'https://d1kfeesv1ktpnk.cloudfront.net/custom/matchesByCourt/6d102e78-dacd-463b-a17f-5e0404711e19',
    refreshTime: 10000,
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof JSONBlockComponent>

export default meta
type Story = StoryObj<typeof meta>

export const JSONBlock: Story = {
  args: {
    refreshTime: 10000
  }
}
