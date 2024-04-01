import { jokesApi } from '@/api/joke-api'
import { useQuery } from '@tanstack/react-query'

export const useJokeRandom = (options) => {
  return useQuery({
    ...options,
    queryKey: ['jokes'],
    queryFn: jokesApi.getJokeRandom
  })
}

export const useFunnyJokes = (options) => {
  return useQuery({
    ...options,
    queryKey: ['funny'],
    queryFn: () =>
      jokesApi.postFunnyVote({
        id: options.id,
        funny: options.funny++
      }),
    // Only make the API call if the user has already funny on a joke.
    // This is to prevent multiple API calls being made for the same joke
    // by passing around the user's vote status through the URL.
    enabled: !options.hasCookie
  })
}

export const useNotFunnyJokes = (options) => {
  return useQuery({
    ...options,
    queryKey: ['notFunny'],
    queryFn: () =>
      jokesApi.postNotFunnyVote({
        id: options.id,
        notFunny: options.notFunny++
      }),
    // Only make the API call if the user has already notFunny on a joke.
    // This is to prevent multiple API calls being made for the same joke
    // by passing around the user's vote status through the URL.
    enabled: !options.hasCookie
  })
}
