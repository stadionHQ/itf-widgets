import axios from 'axios'
import { useQuery } from 'react-query'
import { Wrapper } from './JSONBlock.styles'
import { JSONBlockProps } from './JSONBlock.types'

export const JSONBlock = ({ url, refreshTime }: JSONBlockProps) => {
  const fetchData = async (): Promise<any> => {
    const { data } = await axios.get(url ?? '')
    return data
  }

  const { data, error, isLoading } = useQuery<any, Error>(
    'jsonBlock',
    fetchData,
    {
      refetchInterval: refreshTime ?? 5000,
    },
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error || !url) {
    return <div>An error occurred: {error?.message}</div>
  }

  return (
    <Wrapper>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Wrapper>
  )
}
