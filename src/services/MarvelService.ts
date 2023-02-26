import api from './MarvelApi'

class MarvelService {
  getCharacters() {
    return api.get('/characters')
  }
}

export default new MarvelService()
