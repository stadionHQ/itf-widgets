import { useTranslation } from 'react-i18next'
import { LabelXS1, LabelXS2 } from 'styles'
import { MatchCard as MatchCardProps } from 'types'
import {
  Card,
  CompetitionInfoRow,
  Container,
  StatusRow,
} from './MatchCard.styles'

export const MatchCard = ({
  // id,
  competitionType,
  competitonStage,
  courtName,
  matchTime,
}: MatchCardProps) => {
  const { t } = useTranslation()

  return (
    <Card>
      <Container>
        <LabelXS2>{competitionType}</LabelXS2>
        <CompetitionInfoRow>
          <LabelXS1>{competitonStage}</LabelXS1> ·{' '}
          <LabelXS1>{courtName}</LabelXS1> · <LabelXS1>{matchTime}</LabelXS1>
        </CompetitionInfoRow>
        <StatusRow>
          <LabelXS2>{t('matches.status.completed')}</LabelXS2>
        </StatusRow>
      </Container>
    </Card>
  )
}
