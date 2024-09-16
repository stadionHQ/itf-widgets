import axios from 'axios'
import { useQuery } from 'react-query'
import { HelloITFText } from './HelloITF.styles'

interface Data {
  data: {
    competitionCategory?: string
    competitionCategoryId: string
    createdAt: string
    deletedAt?: string
    groups: any[]
    id: string
    name: string
    tennisId?: string
    updatedAt: string
  }[]
}

const fetchData = async (): Promise<Data> => {
  const url = 'https://d1kfeesv1ktpnk.cloudfront.net/competition?include=groups'
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
            <li key={`${item.id}-${index}`}>
              {item.name}
              <ul>
                {item.groups.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
