import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Button,
  Divider,
  DividerDirection,
  Heading2,
  Heading3,
  LabelM1,
  LabelS1,
} from 'atoms'
import axios from 'axios'
import { MatchCard } from 'molecules/MatchCard'
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { CourtPayload } from 'types'
import {
  Container,
  HeaderRow,
  HeaderRowContent,
  IconPlaceholder,
  Locale,
  MatchCardGrid,
  ViewMore,
  ViewTournamentLink,
} from './Tournament.styles'
import { TournamentProps } from './Tournament.types'

export const Tournament = ({ eventId, name, location }: TournamentProps) => {
  const [viewAll, setViewAll] = useState<boolean>(false)

  const limitNumbers = useMemo(() => {
    return !viewAll ? { courts: 1, matches: 3 } : { courts: 99, matches: 99 }
  }, [viewAll])

  const fetchData = async (): Promise<CourtPayload[]> => {
    const url = `https://d1kfeesv1ktpnk.cloudfront.net/custom/matchesByCourt/${eventId}`
    const { data } = await axios.get(url)
    return data
  }

  const { data, error, isLoading } = useQuery<CourtPayload[], Error>(
    'courtsData',
    fetchData,
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error || !eventId) {
    return <div>An error occurred: {error?.message}</div>
  }

  console.log(data?.slice(0, 1))

  const handleLoadMore = () => {
    setViewAll(!viewAll)
  }

  return (
    <Container>
      <HeaderRow>
        <HeaderRowContent>
          <Heading2>{name}</Heading2>
          <Divider direction={DividerDirection.VERTICAL} />
          <IconPlaceholder />
          <Locale>
            <IconPlaceholder />
            <LabelS1>
              {location?.city ? `${location?.city}` : ''}
              {location?.city && location?.country ? ', ' : ''}
              {location?.country ? `${location?.country}` : ''}
            </LabelS1>
          </Locale>
        </HeaderRowContent>
        <ViewTournamentLink
          href={`https://www.itftennis.com/en/tournament?id=${eventId}`}
          target="_blank"
        >
          <LabelM1>View tournament</LabelM1>
          <ArrowRight />
        </ViewTournamentLink>
      </HeaderRow>

      {data?.slice(0, limitNumbers.courts).map((dateOrganisedCourtData) =>
        dateOrganisedCourtData.courts
          .slice(0, limitNumbers.courts)
          .map((court) => (
            <React.Fragment key={court.courtName}>
              <Heading3>{court.courtName}</Heading3>
              <MatchCardGrid>
                {court.matches.slice(0, limitNumbers.matches).map((match) => (
                  <MatchCard key={match.id} data={match} />
                ))}
              </MatchCardGrid>
            </React.Fragment>
          )),
      )}

      <ViewMore>
        <Button
          text={viewAll ? 'View less courts' : 'View more courts'}
          onClick={handleLoadMore}
          iconEnd={viewAll ? <ArrowUp /> : <ArrowDown />}
        />
      </ViewMore>
    </Container>
  )
}
