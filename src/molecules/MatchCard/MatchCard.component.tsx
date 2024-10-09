import { LabelXS1, LabelXS2, Recording } from 'atoms'
import {
  Card,
  CompetitionInfoRow,
  Container,
  IconPlaceholder,
  LiveStatus,
  Player,
  PlayerName,
  PlayerNumber,
  Players,
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
          <IconPlaceholder />
          <PlayerName>P. Lastname</PlayerName>
          <PlayerNumber>#8</PlayerNumber>
        </Player>
        <Player $selected={true}>
          <IconPlaceholder />
          <PlayerName>P. Lastname</PlayerName>
          <PlayerNumber>#8</PlayerNumber>
        </Player>
      </Players>
    </Card>
  )
}
