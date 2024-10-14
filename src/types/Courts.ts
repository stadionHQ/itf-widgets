export interface CourtPayload {
  courts: CourtElement[]
  date: Date
}

export interface CourtElement {
  courtName: CourtNameEnum
  matches: Match[]
}

export enum CourtNameEnum {
  Court1 = 'Court 1',
  Court2 = 'Court 2',
  Court3 = 'Court 3',
  Court4 = 'Court 4',
  Court5 = 'Court 5',
}

export interface Match {
  court: MatchCourt
  courtId: string
  createdAt: Date
  currentServerSide: null
  currentServerSideId: null | string
  dateStartLocal: Date
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
  updatedAt: Date
  winnerSide: null
  winnerSideId: null | string
}

export interface MatchCourt {
  createdAt: Date
  deletedAt: null
  id: string
  matches: null
  name: CourtNameEnum
  updatedAt: Date
}

export interface Discipline {
  _name?: Name
  createdAt: Date
  deletedAt: null
  id: string
  name: DisciplineName
  tennisId: null
  type?: Type
  updatedAt: Date
  displayName?: DisplayName
}

export enum Name {
  MenSDoubles = "Men's Doubles",
}

export enum DisplayName {
  Completed = 'Completed',
  Live = 'Live',
  Scheduled = 'Scheduled',
}

export enum DisciplineName {
  Completed = 'Completed',
  InProgress = 'In Progress',
  MenS = "Men's",
  Scheduled = 'Scheduled',
}

export enum Type {
  Doubles = 'Doubles',
}

export interface Side {
  countryId: null
  createdAt: Date
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
  updatedAt: Date
}

export interface SidePlayer {
  createdAt: Date
  deletedAt: null
  id: string
  player: Player
  playerId: string
  side: null
  sideId: string
  tennisId: null
  updatedAt: Date
}

export interface Player {
  _name: string
  country: null
  countryId: null | string
  createdAt: Date
  deletedAt: null
  doublesSeedingRank: null
  id: string
  person: { [key: string]: null | string }
  personId: string
  singlesSeedingRank: null | string
  team: null
  teamId: string
  updatedAt: Date
}

export interface SideSet {
  createdAt: Date
  deletedAt: null
  id: string
  set: Set
  setId: string
  setNumber: null
  setScore: number
  setTieBreakScore: number
  side: null
  tennisId: string
  updatedAt: Date
}

export interface Set {
  createdAt: Date
  deletedAt: null
  duration: number
  id: string
  match: null
  matchId: string
  setNumber: number
  updatedAt: Date
}