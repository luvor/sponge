import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { Character } from '../types'

export default function CharacterCard({ character }: { character: Character }) {
  const [collapsed, setCollapsed] = useState(true)
  const navigate = useNavigate()
  return (
    <div className="border max-w-[300px] animate-bounce-alt animate-count-1 animate-duration-1s shadow-md rounded-md overflow-hidden border-gray-100 mb-4">
      <img className="max-w-full" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <div className="p-2">
        <h2 className="text-xl font-bold">{character.name}</h2>

        <p>{character.description}</p>

        {character.comics.items.length > 0 && (
          <div className="flex flex-col duration-300 cursor-pointer">
            <p className="px-6 py-1 flex justify-between text-white mt-2 font-bold bg-red-400 rounded select-none" onClick={() => setCollapsed(!collapsed)}>
              Comics <span>{collapsed ? '+' : '-'}</span>
            </p>
            {/* collapsable list of comics */}
            {collapsed ? (
              ''
            ) : (
              <div className="flex flex-col">
                {character.comics.items.map((comic) => (
                  <div key={comic.name} className="flex flex-row">
                    <Link to={`/comic/${comic.resourceURI.split('/').at(-1)}`}>{comic.name}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
