import type { Meta, StoryObj } from '@storybook/react'
// import { fn } from '@storybook/test'

import { Tournament } from './Tournament.component'

const meta = {
  title: 'Components / Tournament',
  component: Tournament,
  args: {
    // onLogin: fn(),
  },
} satisfies Meta<typeof Tournament>

export default meta
type Story = StoryObj<typeof meta>

export const Card: Story = {}

// export const CardXYZ: Story = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };
