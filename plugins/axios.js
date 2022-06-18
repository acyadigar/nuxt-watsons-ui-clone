import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 60 * 60 * 1000 // an hour
})

export default function ({ $axios }, inject) {
  const api = $axios.create({
    baseURL: process.env.BASE_URL,
    adapter: cache.adapter
  })

  inject('api', api)
}