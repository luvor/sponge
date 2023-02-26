import api from './MarvelApi'

class MarvelService {
  getCharacters() {
    return api.get('/characters')
  }
  getComicsById(id: number) {
    return api.get(`/comics/${id}`)
  }
}

export default new MarvelService()
