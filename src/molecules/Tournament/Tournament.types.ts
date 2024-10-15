export interface TournamentProps {
  eventId?: string
  name?: string
  location?: { city?: string; country?: string }
  flagUrls?: { tournament?: string; country?: string }
}
