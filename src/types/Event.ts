// TODO: ASK BE TO GENERATE A MORE ACCURATE TYPE HERE WITH CONDITIONALS ? ETC

export interface Event {
  data: Datum[]
  links: Links
  meta: Meta
}

export interface Datum {
  _name: string
  createdAt: Date
  deletedAt: null
  discipline: null
  disciplineId: string
  draws: Draw[]
  endDate: Date
  eventCategory: EventCategory
  eventCategoryId: string
  eventDivision: null
  eventDivisionId: null
  eventStatus: null
  eventStatusId: null
  eventType: null
  eventTypeId: null
  group: null
  groupId: null
  id: string
  locationId: null
  name: string
  officialName: null
  startDate: Date
  surface: EventCategory
  surfaceId: string
  teams: null
  tennisId: null
  updatedAt: Date
  venue: Venue
  venueId: string
}

export interface Draw {
  _name: null
  createdAt: Date
  deletedAt: null
  drawType: null
  drawTypeId: null | string
  endDate: null
  event: null
  eventId: string
  group: null
  groupId: null
  id: string
  name: string
  rounds: Round[]
  startDate: null
  updatedAt: Date
}

export interface Round {
  _name: null
  createdAt: Date
  deletedAt: null
  draw: null
  drawId: string
  id: string
  matches: Match[]
  name: string
  roundType: null
  roundTypeId: null | string
  tennisId: null
  ties: null
  updatedAt: Date
}

export interface Match {
  court: Court | null
  courtId: null | string
  createdAt: Date
  currentServerSide: null
  currentServerSideId: null | string
  dateStartLocal: Date
  deletedAt: null
  duration: null | string
  id: string
  matchStatus: EventCategory | null
  matchStatusId: null | string
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

export interface Court {
  createdAt: Date
  deletedAt: null
  id: string
  matches: null
  name: string
  updatedAt: Date
}

export interface EventCategory {
  createdAt: Date
  deletedAt: null
  displayName?: string
  id: string
  name: string
  tennisId: null
  updatedAt: Date
  type?: string
  _name?: string
  venueType?: null
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
  set: null
  setId: string
  setNumber: null
  setScore: number
  setTieBreakScore: number
  side: null
  tennisId: string
  updatedAt: Date
}

export interface Venue {
  _name: string
  city: string
  country: Country
  countryId: string
  createdAt: Date
  deletedAt: null
  id: string
  name: string
  surface: null
  surfaceId: null
  updatedAt: Date
  venueType: null
  venueTypeId: null
}

export interface Country {
  ISOcode: null
  createdAt: Date
  deletedAt: null
  id: string
  name: string
  players: null
  region: null
  regionId: null
  teams: null
  tennisId: null
  updatedAt: Date
}

export interface Links {
  first: string
  last: string
  next: string
  prev: null
}

export interface Meta {
  datasource: string
  filter: Filter
  filterOptions: Filter
  include: string
  paginate: string
  sort: Filter
}

export interface Filter {
  startDate: string
}
