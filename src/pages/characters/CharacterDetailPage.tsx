import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MarvelService from '../../services/MarvelService'

import { formatIsoDateTime } from '../../utils/dates'

import { Character } from '../../types'

export default function CharacterDetailPage() {
  const { id } = useParams()
  const [character, setCharacter] = useState<Character | null>(null)
  useEffect(() => {
    MarvelService.getCharacterById(Number(id)).then((res) => {
      setCharacter(res.data.data.results[0])
      console.log(res.data.data.results[0])
    })
  }, [id])
  return (
    <div className="p-4">
      {character && (
        <div className="p-4 max-w-full">
          <h1 className="text-2xl font-bold mb-4">{character.name}</h1>
          <div className="flex justify-between">
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className="w-1/2" />
            <div className="flex flex-col grow-2 px-6">
              <p>{character.description}</p>
              <p>Количество комиксов: {character.comics.available}</p>
              <p>Количество серий: {character.series.available}</p>
              <p>Количество событий: {character.events.available}</p>
              <p>Количество историй: {character.stories.available}</p>
              <div className="flex flex-col mt-2">
                <p>Комиксы: </p>
                {character.comics.items.map((comic) => (
                  <div key={comic.name} className="flex flex-row mt-2">
                    <a className="block w-full hover:bg-gray-50 pt-1 decoration-none hover:text-red-400 text-black" href={`/comics/${comic.resourceURI.split('/').at(-1)}`}>
                      {comic.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
