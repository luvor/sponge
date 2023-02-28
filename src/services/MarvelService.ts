import api from './MarvelApi'

class MarvelService {
  getCharacters() {
    return api.get('/characters')
  }
  getComics() {
    return api.get('/comics')
  }
  getCharacterById(id: number) {
    return api.get(`/characters/${id}`)
  }
  getComicsById(id: number) {
    return api.get(`/comics/${id}`)
  }

  getStories() {
    return api.get('/stories')
  }
}

export default new MarvelService()
