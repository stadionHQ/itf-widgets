import { LabelXS1, LabelXS2, Recording, Tick } from 'atoms'
import { intervalToDuration } from 'date-fns'
import { useMemo } from 'react'
import { Match } from 'types'
import {
  Card,
  CompetitionInfoRow,
  Container,
  IconPlaceholder,
  LiveStatus,
  Player,
  PlayerDetails,
  PlayerName,
  PlayerNumber,
  Players,
  PlayerStats,
  PlayerStatsRoundScore,
  StatusLiveMatch,
  StatusPreMatch,
  StatusRow,
} from './MatchCard.styles'

export const MatchCard = ({ data }: { data: Match }) => {
  // TODO: Remove once confirmed we no longer need any custom text and all will be returned from the API
  // const { t } = useTranslation()
  // {/* {t('matches.status.completed')} */}

  const status = useMemo(() => {
    return data?.matchStatus.name === 'In Progress'
      ? 'live'
      : data?.matchStatus.name === 'Scheduled'
        ? 'pre'
        : 'post'
  }, [data?.matchStatus.name])

  const formattedDuration = useMemo(() => {
    if (!data?.duration) return null
    const [hours, minutes, seconds] = data.duration.split(':').map(Number)
    const totalMinutes = hours * 60 + minutes
    const totalSeconds = totalMinutes * 60 + seconds
    const duration = intervalToDuration({ start: 0, end: totalSeconds * 1000 })
    return `${duration.hours ? `${duration.hours}h` : ''} ${duration.minutes ? `${duration.minutes}m` : ''}`
  }, [data?.duration])

  return (
    <Card>
      <Container>
        <LabelXS2>{data?.discipline._name}</LabelXS2>
        <CompetitionInfoRow>
          <LabelXS1>{data?.matchStatus.displayName}</LabelXS1> ·{' '}
          <LabelXS1>{data?.court.name}</LabelXS1>
          {formattedDuration ? (
            <>
              {' '}
              · <LabelXS1>{formattedDuration}</LabelXS1>
            </>
          ) : null}
        </CompetitionInfoRow>

        {status === 'pre' ? (
          <StatusPreMatch>
            <StatusRow>
              <LabelXS2>{data?.scheduleText}</LabelXS2>
            </StatusRow>
          </StatusPreMatch>
        ) : null}
        {status === 'live' ? (
          <StatusLiveMatch>
            <StatusRow>
              <LiveStatus>
                <Recording />
                <LabelXS2>{data?.matchStatus.displayName}</LabelXS2>
              </LiveStatus>
              <LabelXS1>{data?.matchStatus.name}</LabelXS1>
            </StatusRow>
          </StatusLiveMatch>
        ) : null}
        {status === 'post' ? (
          <StatusRow>
            <LabelXS2>{data?.matchStatus.displayName}</LabelXS2>
          </StatusRow>
        ) : null}
      </Container>

      {data?.sides && data?.sides.length > 0 ? (
        <Players>
          {data.sides.map((player, i) =>
            player ? (
              // TODO: Connect this $selected prop up to the data source when possible
              <Player $selected={i === 0}>
                <PlayerDetails>
                  <IconPlaceholder />
                  <PlayerName>{player.sidePlayer[0]?.player._name}</PlayerName>
                  {player.sidePlayer[0]?.player.singlesSeedingRank ? (
                    <PlayerNumber>
                      #{player.sidePlayer[0]?.player.singlesSeedingRank}
                    </PlayerNumber>
                  ) : null}
                </PlayerDetails>
                {status === 'live' || status === 'post' ? (
                  <PlayerStats>
                    {/* TODO: Link these up when data is available */}
                    {i === 0 ? <Tick /> : null}
                    {/* {status === 'live' ? (
                    <PlayerStatsCurrent>
                      <PlayerStatsCurrentServeIndicator />
                      <PlayerStateCurrentRoundScore>
                        <LabelS2>30</LabelS2>
                      </PlayerStateCurrentRoundScore>
                    </PlayerStatsCurrent>
                  ) : null} */}
                    {player.sideSets.map((set) => (
                      <PlayerStatsRoundScore>
                        <LabelXS2>{set.setScore}</LabelXS2>
                        <sup>
                          <LabelXS1>{set.setTieBreakScore}</LabelXS1>
                        </sup>
                      </PlayerStatsRoundScore>
                    ))}
                  </PlayerStats>
                ) : null}
              </Player>
            ) : null,
          )}
        </Players>
      ) : null}
    </Card>
  )
}
