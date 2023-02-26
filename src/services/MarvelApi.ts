import axios from 'axios'
import { md5 } from '../utils/md5'

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY
const ts = new Date().getTime()

// make hash md5(ts+privateKey+publicKey)
const hash = md5(`${ts}${privateKey}${publicKey}`)

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: publicKey,
    ts: new Date().getTime(),
    hash: hash,
  },
})

export default api
