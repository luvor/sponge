import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Character } from '../types'
import { IconArrowDown } from './icons/IconArrowDown'

export default function CharacterCard({ character }: { character: Character }) {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <Link className="decoration-none text-black" to={`/character/${character.id}`}>
      <div className="border max-w-[300px] animate-bounce-alt animate-count-1 animate-duration-1s shadow-md rounded-md overflow-hidden border-gray-100 mb-4">
        <img className="max-w-full" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        <div className="p-2">
          <h2 className="text-xl font-bold">{character.name}</h2>

          <p>{character.description}</p>

          {character.comics.items.length > 0 && (
            <div className="flex flex-col duration-300 cursor-pointer">
              <p className="px-6 py-1 flex justify-between items-center text-white mt-2 font-bold bg-red-400 rounded select-none" onClick={() => setCollapsed(!collapsed)}>
                Comics{' '}
                <span>
                  <IconArrowDown className={collapsed ? 'rotate-0 w-6 h-6 transition-all duration-300' : '-rotate-180 w-6 h-6 transition-all duration-300'} />
                </span>
              </p>
              {/* collapsable list of comics */}
              {collapsed ? (
                ''
              ) : (
                <div className="flex flex-col">
                  {character.comics.items.map((comic) => (
                    <div key={comic.name} className="flex flex-row mt-2">
                      <Link className="block w-full hover:bg-gray-50 pt-1 decoration-none hover:text-red-400 text-black" to={`/comics/${comic.resourceURI.split('/').at(-1)}`}>
                        {comic.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
