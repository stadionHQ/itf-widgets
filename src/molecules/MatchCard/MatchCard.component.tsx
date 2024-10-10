import { LabelS2, LabelXS1, LabelXS2, Recording, Tick } from 'atoms'
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
  PlayerStateCurrentRoundScore,
  PlayerStats,
  PlayerStatsCurrent,
  PlayerStatsCurrentServeIndicator,
  PlayerStatsRoundScore,
  StatusLiveMatch,
  StatusPreMatch,
  StatusRow,
} from './MatchCard.styles'

// { court, scheduleText, matchStatus }: Match
export const MatchCard = ({
  status = 'pre',
}: {
  status?: 'pre' | 'live' | 'post'
}) => {
  // const { t } = useTranslation()
  // {/* {t('matches.status.completed')} */}

  return (
    <Card>
      <Container>
        <LabelXS2>
          CompetitionType
          {/* {court?.name} */}
        </LabelXS2>
        <CompetitionInfoRow>
          <LabelXS1>
            CompetitionStage
            {/* {scheduleText} */}
          </LabelXS1>{' '}
          ·{' '}
          <LabelXS1>
            CourtName
            {/* {court?.name} */}
          </LabelXS1>{' '}
          ·{' '}
          <LabelXS1>
            88hr 88m
            {/* {scheduleText} */}
          </LabelXS1>
        </CompetitionInfoRow>

        {/* TODO: Dependant on the current status */}
        {status === 'pre' ? (
          <StatusPreMatch>
            <StatusRow>
              <LabelXS2>
                Estimated Time GMT
                {/* {matchStatus?.name} */}
              </LabelXS2>
            </StatusRow>
          </StatusPreMatch>
        ) : null}
        {status === 'live' ? (
          <StatusLiveMatch>
            <StatusRow>
              <LiveStatus>
                <Recording />
                <LabelXS2>Livestream</LabelXS2>
              </LiveStatus>
              <LabelXS1>matchStatus</LabelXS1>
            </StatusRow>
          </StatusLiveMatch>
        ) : null}
        {status === 'post' ? (
          <StatusRow>
            <LabelXS2>Completed</LabelXS2>
          </StatusRow>
        ) : null}
      </Container>

      <Players>
        <Player>
          <PlayerDetails>
            <IconPlaceholder />
            <PlayerName>P. Lastname</PlayerName>
            <PlayerNumber>#8</PlayerNumber>
          </PlayerDetails>
          {status === 'live' || status === 'post' ? (
            <PlayerStats>
              {status === 'live' ? (
                <PlayerStatsCurrent>
                  <PlayerStatsCurrentServeIndicator />
                  <PlayerStateCurrentRoundScore>
                    <LabelS2>30</LabelS2>
                  </PlayerStateCurrentRoundScore>
                </PlayerStatsCurrent>
              ) : null}
              <PlayerStatsRoundScore>
                <LabelXS2>8</LabelXS2>
                <sup>
                  <LabelXS1>8</LabelXS1>
                </sup>
              </PlayerStatsRoundScore>
              <PlayerStatsRoundScore>
                <LabelXS2>8</LabelXS2>
                <sup>
                  <LabelXS1>8</LabelXS1>
                </sup>
              </PlayerStatsRoundScore>
              <PlayerStatsRoundScore>
                <LabelXS2>8</LabelXS2>
                <sup>
                  <LabelXS1>8</LabelXS1>
                </sup>
              </PlayerStatsRoundScore>
            </PlayerStats>
          ) : null}
        </Player>
        <Player $selected={status === 'post'}>
          <PlayerDetails>
            <IconPlaceholder />
            <PlayerName>P. Lastname</PlayerName>
            <PlayerNumber>#8</PlayerNumber>
          </PlayerDetails>
          {status === 'live' || status === 'post' ? (
            <PlayerStats>
              {status === 'post' ? <Tick /> : null}
              {status === 'live' ? (
                <PlayerStatsCurrent>
                  <PlayerStateCurrentRoundScore>
                    <LabelS2>30</LabelS2>
                  </PlayerStateCurrentRoundScore>
                </PlayerStatsCurrent>
              ) : null}
              <PlayerStatsRoundScore>
                <LabelXS2>8</LabelXS2>
                <sup>
                  <LabelXS1>8</LabelXS1>
                </sup>
              </PlayerStatsRoundScore>
              <PlayerStatsRoundScore>
                <LabelXS2>8</LabelXS2>
                <sup>
                  <LabelXS1>8</LabelXS1>
                </sup>
              </PlayerStatsRoundScore>
              <PlayerStatsRoundScore>
                <LabelXS2>8</LabelXS2>
                <sup>
                  <LabelXS1>8</LabelXS1>
                </sup>
              </PlayerStatsRoundScore>
            </PlayerStats>
          ) : null}
        </Player>
      </Players>
    </Card>
  )
}
