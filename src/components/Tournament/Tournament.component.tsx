import { Heading2, Heading3 } from 'styles'
import { Container, HeaderLink, HeaderRow } from './Tournament.styles'
import { TournamentProps } from './Tournament.types'

export const Tournament = ({ id }: TournamentProps) => {
  const fakeMatches = [{ id: 'TEST1' }, { id: 'TEST2' }, { id: 'TEST3' }]

  const fakeData = {
    id,
    title: 'WTA Prague Open',
    viewTournamentLink: 'https://stadion.io',
    courts: [
      { title: 'Centre Court', matches: fakeMatches },
      { title: 'Centre Court', matches: fakeMatches },
      { title: 'Centre Court', matches: fakeMatches },
    ],
  }

  return (
    <Container>
      <HeaderRow>
        <Heading2>{fakeData.title}</Heading2>
        <HeaderLink>View tournament</HeaderLink>
      </HeaderRow>

      <Heading3>Centre Court</Heading3>

      {/* TODO: MATCH CARDS */}
    </Container>
  )
}
