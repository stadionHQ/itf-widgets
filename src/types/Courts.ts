export interface CourtPayload {
  courts: CourtElement[]
  date: string
}

export interface CourtElement {
  courtName: string
  matches: Match[]
}

export interface Match {
  court: MatchCourt
  courtId: string
  createdAt: string
  currentServerSide: null
  currentServerSideId: null | string
  dateStartLocal: string
  deletedAt: null
  discipline: Discipline
  duration: null | string
  id: string
  matchStatus: Discipline
  matchStatusId: string
  officialId: null
  round: null
  roundId: string
  scheduleText: string
  scoringType: null
  scoringTypeId: null | string
  sides: Side[]
  tennisId: null
  tie: null
  tieId: null
  updatedAt: string
  winnerSide: null
  winnerSideId: null | string
}

export interface MatchCourt {
  createdAt: string
  deletedAt: null
  id: string
  matches: null
  name: string
  updatedAt: string
}

export interface Discipline {
  _name?: string
  createdAt: string
  deletedAt: null
  id: string
  name: string
  tennisId: null
  type?: string
  updatedAt: string
  displayName?: string
}

export interface Side {
  countryId: null
  createdAt: string
  deletedAt: null
  id: string
  match: null
  matchId: string
  score: null | string
  sidePlayer: SidePlayer[]
  sideSets: SideSet[]
  team: null
  teamId: string
  tennisId: null
  tie: null
  tieId: null
  updatedAt: string
}

export interface SidePlayer {
  createdAt: string
  deletedAt: null
  id: string
  player: Player
  playerId: string
  side: null
  sideId: string
  tennisId: null
  updatedAt: string
}

export interface Player {
  _name: string
  country: null
  countryId: null | string
  createdAt: string
  deletedAt: null
  doublesSeedingRank: null
  id: string
  person: { [key: string]: null | string }
  personId: string
  singlesSeedingRank: null | string
  team: null
  teamId: string
  updatedAt: string
}

export interface SideSet {
  createdAt: string
  deletedAt: null
  id: string
  set: Set
  setId: string
  setNumber: null
  setScore: number
  setTieBreakScore: number
  side: null
  tennisId: string
  updatedAt: string
}

export interface Set {
  createdAt: string
  deletedAt: null
  duration: number
  id: string
  match: null
  matchId: string
  setNumber: number
  updatedAt: string
}
