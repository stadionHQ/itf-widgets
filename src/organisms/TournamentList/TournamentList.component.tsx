import axios from 'axios'
import { Tournament } from 'molecules'
import { useQuery } from 'react-query'
import { Event } from 'types'
import { Wrapper } from './TournamentList.styles'

export const TournamentList = () => {
  const fetchData = async (): Promise<Event> => {
    const url =
      'https://d1kfeesv1ktpnk.cloudfront.net/event?filter%5BstartDate%5D=2024-10-10&filterOptions%5BstartDate%5D=greaterThanEqualTo&paginate=20&include=venue.country,surface,eventCategory,draws.rounds.matches.court,draws.rounds.matches.sides.sidePlayer.player.person,draws.rounds.matches.sides.sideSets,draws.rounds.matches.matchStatus&sort%5BstartDate%5D=asc'
    const { data } = await axios.get(url)
    return data
  }

  const { data, error, isLoading } = useQuery<Event, Error>('events', fetchData)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>
  }

  return (
    <Wrapper>
      {data?.data?.map((item) => (
        <section key={item.eventCategoryId}>
          <Tournament {...item} />
        </section>
      ))}
    </Wrapper>
  )
}
