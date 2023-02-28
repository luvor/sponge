import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import MarvelService from '../../services/MarvelService'

import { formatIsoDateTime } from '../../utils/dates'

import { CharacterSummary, Comic } from '../../types'

export default function ComicsDetailPage() {
  const { id } = useParams()
  const [comics, setComics] = useState<Comic | null>(null)
  useEffect(() => {
    MarvelService.getComicsById(Number(id)).then((res) => {
      setComics(res.data.data.results[0])
      console.log(res.data.data.results[0])
    })
  }, [id])
  return (
    <div>
      {comics && (
        <div className="p-4 w-full">
          <h1 className="text-2xl font-bold mb-4">{comics.title}</h1>
          <div className="flex justify-between">
            <img src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} alt={comics.title} className="max-w-1/2" />
            <div className="flex flex-col grow-2 px-6">
              <p>{comics.description}</p>
              <p>Цена: {comics.prices[0].price} $</p>
              <p>Количество страниц: {comics.pageCount}</p>
              <p>Формат: {comics.format}</p>
              <p>ISBN: {comics.isbn}</p>
              <p>UPC: {comics.upc}</p>
              <p>Старт продаж: {formatIsoDateTime(new Date(comics.dates[0].date))}</p>
              <p>Создатели: {comics.creators.items[0].name}</p>

              <div className="flex flex-col mt-2">
                <p>Персонажи: </p>
                {comics.characters &&
                  comics.characters.items.map((character: CharacterSummary) => (
                    <div key={character.name} className="flex flex-row mt-2">
                      <Link className="block w-full hover:bg-gray-50 pt-1 decoration-none hover:text-red-400 text-black" to={`/character/${character.resourceURI.split('/').at(-1)}`}>
                        {character.name}
                      </Link>
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
