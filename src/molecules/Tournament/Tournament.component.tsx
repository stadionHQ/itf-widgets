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
import { MatchCard } from 'molecules'
import { useState } from 'react'
import { Datum } from 'types/Event'
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

export const Tournament = ({ eventCategoryId, _name, venue, draws }: Datum) => {
  // const fakeMatches = [
  //   {
  //     id: '1',
  //     competitionType: 'competitionType',
  //     competitonStage: 'competitonStage',
  //     courtName: 'courtName',
  //     matchTime: '88h 88m',
  //   },
  //   {
  //     id: '2',
  //     competitionType: 'competitionType',
  //     competitonStage: 'competitonStage',
  //     courtName: 'courtName',
  //     matchTime: '88h 88m',
  //   },
  //   {
  //     id: '3',
  //     competitionType: 'competitionType',
  //     competitonStage: 'competitonStage',
  //     courtName: 'courtName',
  //     matchTime: '88h 88m',
  //   },
  //   {
  //     id: '4',
  //     competitionType: 'competitionType',
  //     competitonStage: 'competitonStage',
  //     courtName: 'courtName',
  //     matchTime: '88h 88m',
  //   },
  //   {
  //     id: '5',
  //     competitionType: 'competitionType',
  //     competitonStage: 'competitonStage',
  //     courtName: 'courtName',
  //     matchTime: '88h 88m',
  //   },
  //   {
  //     id: '6',
  //     competitionType: 'competitionType',
  //     competitonStage: 'competitonStage',
  //     courtName: 'courtName',
  //     matchTime: '88h 88m',
  //   },
  // ]

  const [viewAll, setViewAll] = useState<boolean>(false)

  const handleLoadMore = () => {
    setViewAll(!viewAll)
  }

  return (
    <Container>
      <HeaderRow>
        <HeaderRowContent>
          <Heading2>{_name}</Heading2>
          <Divider direction={DividerDirection.VERTICAL} />
          <IconPlaceholder />
          <Locale>
            <IconPlaceholder />
            <LabelS1>
              {venue?.city}{' '}
              {venue?.country?.name ? `, ${venue?.country?.name}` : ''}
            </LabelS1>
          </Locale>
        </HeaderRowContent>
        <ViewTournamentLink
          href={`https://www.itftennis.com/en/tournament?id=${eventCategoryId}`}
          target="_blank"
        >
          <LabelM1>View tournament</LabelM1>
          <ArrowRight />
        </ViewTournamentLink>
      </HeaderRow>

      <Heading3>Centre Court</Heading3>

      <MatchCardGrid>
        {viewAll
          ? draws?.map((draw) =>
              draw?.rounds.map((round) =>
                round?.matches?.map((match) => (
                  <MatchCard key={match.id} {...match} />
                )),
              ),
            )
          : draws?.map((draw) =>
              draw?.rounds.map((round) =>
                round?.matches
                  ?.slice(0, 3)
                  .map((match) => <MatchCard key={match.id} {...match} />),
              ),
            )}
      </MatchCardGrid>

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
