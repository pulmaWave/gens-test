import axiosClient from './axios-client'

export const jokesApi = {
  getJokeRandom: () => axiosClient.get('/jokes'),
  postFunnyVote: (params) => {
    return axiosClient.put(`/jokes/${params.id}`, params)
  },
  postNotFunnyVote: (params) => axiosClient.put(`/jokes/${params.id}`, params)
}
