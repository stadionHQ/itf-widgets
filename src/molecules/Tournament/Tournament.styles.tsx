import { styled } from 'styled-components'
import { LabelM1 } from 'atoms'

export const Container = styled.section`
  width: 1276px;
  max-width: 100%;
  min-height: 400px;
  margin: 0 auto;
  padding: 60px 40px 44px;
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
`

export const HeaderRowContent = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`

// TODO: replace when the icons are available
export const IconPlaceholder = styled.div`
  width: 52px;
  height: 36px;
  background: lightgrey;
`

export const Locale = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ViewTournamentLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    ${LabelM1} {
      transition: all 200ms;
      color: #1b47f7;
    }
  }
`

export const Court = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;
`

export const MatchCardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 64px;
`

export const ViewMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 35px;
`
