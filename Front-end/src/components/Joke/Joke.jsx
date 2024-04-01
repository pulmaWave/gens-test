import { Button } from '../Button/Button'
import { useFunnyJokes, useNotFunnyJokes } from '@/hooks/use-jokes'
import { useState } from 'react'
import './Joke.css'
import { useJokeRandom } from '../../hooks/use-jokes'

export const Joke = () => {
  // const { data, isLoading, isError } = useJokes()
  // const [funnyUpdate, setFunnyUpdate] = useState(true)
  // const [notFunnyUpdate, setNotFunnyUpdate] = useState(true)

  // const [, setId] = useState()
  const [hasCookie, setHasCookie] = useState(false)
  const getJoke = useJokeRandom()
  const updateFunny = useFunnyJokes({ id: 1, funny: 22, hasCookie })
  const updateNotFunny = useNotFunnyJokes({ id: 1, notFunny: 22, hasCookie })
  // useEffect(() => {
  //   if (document.cookie && funnyUpdate && notFunnyUpdate) {
  //     setHasCookie(true)
  //   } else {
  //     setHasCookie(false)
  //   }
  // }, [])
  if (getJoke.isLoading) {
    return <div>Loading...</div>
  }

  if (getJoke.isError) {
    return <div>Error</div>
  }

  const handleFunnyClick = () => {
    // setFunnyUpdate(true)
    updateFunny
    // document.cookie = 'joke-funny'
    // if (document.cookie && funnyUpdate) {
    setHasCookie(true)
    // } else {
    //   setHasCookie(false)
    // }
    // setFunnyUpdate(false)
    getJoke.refetch()
  }

  const handleNotFunnyClick = () => {
    // setId(data.data.id)
    // setNotFunnyUpdate(true)
    // document.cookie = 'joke-funny'
    updateNotFunny
    // if (document.cookie && notFunnyUpdate) {
    setHasCookie(true)
    // } else {
    //   setHasCookie(false)
    // }
    // setNotFunnyUpdate(false)
    getJoke.refetch()
  }

  return (
    <div className='container joke'>
      <div>
        <div key={getJoke.data.data[0].id}>{getJoke.data.data[0].content}</div>
      </div>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <hr />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Button
          style={{ backgroundColor: '#2c7edb' }}
          onClick={handleFunnyClick}
        >
          This is Funny!
        </Button>
        <Button
          style={{ backgroundColor: '#29b363' }}
          onClick={handleNotFunnyClick}
        >
          This is not funny!
        </Button>
      </div>
    </div>
  )
}
