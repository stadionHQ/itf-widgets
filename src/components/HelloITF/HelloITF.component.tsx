import axios from 'axios'
import { useQuery } from 'react-query'
import { HelloITFText } from './HelloITF.styles'

interface Data {
  data: {
    DisplayName: string
    event: {
      id: string
      [key: string]: any
    }
    [key: string]: any
  }[]
}

const fetchData = async (): Promise<Data> => {
  const url =
    'https://world-rowing-api.soticcloud.net/stats/api/race?filter[event.competitionId]=299157d0-d077-4653-8af6-e96406496047&filter[DateString]=&filterOptions[DateString]=subString&include=event.competition%2CraceStatus&sort[DateString]=asc'
  const { data } = await axios.get(url)
  return data
}

interface HelloITFProps {
  colorText?: boolean
}

export const HelloITF = ({ colorText }: HelloITFProps) => {
  const { data, error, isLoading } = useQuery<Data, Error>('data', fetchData)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>
  }

  return (
    <div>
      <HelloITFText $colorText={colorText}>Hello ITF!</HelloITFText>
      <div>
        <h1>Data</h1>
        <ul>
          {data?.data?.map((item, index) => (
            <li key={`${item.event.id}-${index}`}>{item.DisplayName}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
