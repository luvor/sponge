import CharacterCard from './CharacterCard'

import { Character } from '../types'

export default function CharacterList({ characters, isLoading }: { characters: Character[]; isLoading: boolean }) {
  return <div className="flex flex-wrap justify-between">{isLoading ? <div>Загружаем...</div> : characters.map((character: any) => <CharacterCard key={character.id} character={character} />)}</div>
}
