import api from './MarvelApi'

class MarvelService {
  getCharacters() {
    return api.get('/characters')
  }
  getCharacterById(id: number) {
    return api.get(`/characters/${id}`)
  }
  getComicsById(id: number) {
    return api.get(`/comics/${id}`)
  }
}

export default new MarvelService()
