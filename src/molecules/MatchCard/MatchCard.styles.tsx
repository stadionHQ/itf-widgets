import { LabelXS1, LabelXS2 } from 'atoms'
import { css, styled } from 'styled-components'

export const Card = styled.div`
  max-width: 412px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 16px 1px rgba(0, 0, 0, 0.08);
`

export const Container = styled.div`
  padding: 6px 8px 4px 8px;
  border-bottom: 1px solid #ebeeff;
`

export const CompetitionInfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 8px;
`

export const StatusRow = styled.div`
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`

export const StatusPreMatch = styled.div`
  ${LabelXS2} {
    color: #6c757d;
  }
`

export const StatusLiveMatch = styled.div`
  ${LabelXS2} {
    color: #6c757d;
  }
`

export const LiveStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;

  padding: 0 8px 0 6px;
  background-color: #1b47f7;
  border-radius: 999px;

  ${LabelXS2} {
    color: #fff;
  }
`

export const Players = styled.div`
  display: flex;
  flex-direction: column;
`

export const Player = styled.div<{ $selected?: boolean }>`
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 16px 16px 8px;

  ${(props) =>
    props.$selected
      ? css`
          background-color: #ebeeff;
        `
      : ''}
`

export const PlayerDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`

export const IconPlaceholder = styled.div`
  width: 12px;
  height: 10px;
  background-color: lightgrey;
`

export const PlayerName = styled(LabelXS1)`
  color: #000;
`

export const PlayerNumber = styled(LabelXS1)`
  color: #6c757d;
`

export const PlayerStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`

export const PlayerStatsRoundScore = styled.div``

export const PlayerStatsCurrent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const PlayerStatsCurrentServeIndicator = styled.div`
  width: 8px;
  height: 8px;
  background-color: #000436;
  border-radius: 100%;
`

export const PlayerStateCurrentRoundScore = styled.div`
  padding: 2px 4px;
  background-color: #ced4ff;
  border-radius: 4px;
`
