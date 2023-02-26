import { Thumbnail, Url, Character, EventSummary, StorySummary } from './Characters'

export interface Comic {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: TextObject[]
  resourceURI: string
  urls: Url[]
  series: Series
  variants: any[]
  collections: any[]
  collectedIssues: any[]
  dates: Date[]
  prices: Price[]
  thumbnail: Thumbnail
  images: Thumbnail[]
  creators: Creators
  characters: Characters
  stories: Stories
  events: Events
}

export interface Characters {
  available: number
  returned: number
  collectionURI: string
  items: CharacterSummary[]
}

export interface CharacterSummary {
  resourceURI: string
  name: string
  role: string
}

export interface TextObject {
  type: string
  language: string
  text: string
}

export interface Series {
  resourceURI: string
  name: string
}

export interface Date {
  type: string
  date: string
}

export interface Price {
  type: string
  price: number
}

export interface Creators {
  available: number
  returned: number
  collectionURI: string
  items: CreatorSummary[]
}

export interface CreatorSummary {
  resourceURI: string
  name: string
  role: string
}

export interface Stories {
  available: number
  returned: number
  collectionURI: string
  items: StorySummary[]
}

export interface Events {
  available: number
  returned: number
  collectionURI: string
  items: EventSummary[]
}

// {
//   "id": 47176,
//   "digitalId": 30661,
//   "title": "FREE COMIC BOOK DAY 2013 1 (2013) #1",
//   "issueNumber": 1,
//   "variantDescription": "",
//   "description": "",
//   "modified": "2016-09-29T14:27:24-0400",
//   "isbn": "",
//   "upc": "75960607889900111",
//   "diamondCode": "",
//   "ean": "",
//   "issn": "",
//   "format": "Comic",
//   "pageCount": 32,
//   "textObjects": [
//     {
//       "type": "issue_solicit_text",
//       "language": "en-us",
//       "text": "It's out action featuring the newest stars to be of Disney XD: Avengers and the Hulk and the Agents of S.M.A.S.H.! Featuring art pulled directly from the animated series, this sneak peek at the two newest animated series from the geniuses at Marvel Animation promises to make this the best yet!"
//     }
//   ],
//   "resourceURI": "http://gateway.marvel.com/v1/public/comics/47176",
//   "urls": [
//     {
//       "type": "detail",
//       "url": "http://marvel.com/comics/issue/47176/free_comic_book_day_2013_1_2013_1?utm_campaign=apiRef&utm_source=299597108ce1c0bf9438a5bd325aafd3"
//     },
//     {
//       "type": "purchase",
//       "url": "http://comicstore.marvel.com/FREE-COMIC-BOOK-DAY-2013-1-1/digital-comic/30661?utm_campaign=apiRef&utm_source=299597108ce1c0bf9438a5bd325aafd3"
//     },
//     {
//       "type": "reader",
//       "url": "http://marvel.com/digitalcomics/view.htm?iid=30661&utm_campaign=apiRef&utm_source=299597108ce1c0bf9438a5bd325aafd3"
//     },
//     {
//       "type": "inAppLink",
//       "url": "https://applink.marvel.com/issue/30661?utm_campaign=apiRef&utm_source=299597108ce1c0bf9438a5bd325aafd3"
//     }
//   ],
//   "series": {
//     "resourceURI": "http://gateway.marvel.com/v1/public/series/17765",
//     "name": "FREE COMIC BOOK DAY 2013 1 (2013)"
//   },
//   "variants": [],
//   "collections": [],
//   "collectedIssues": [],
//   "dates": [
//     {
//       "type": "onsaleDate",
//       "date": "2013-03-20T00:00:00-0400"
//     },
//     {
//       "type": "focDate",
//       "date": "2013-03-04T00:00:00-0500"
//     },
//     {
//       "type": "unlimitedDate",
//       "date": "2013-11-04T00:00:00-0500"
//     },
//     {
//       "type": "digitalPurchaseDate",
//       "date": "2013-07-09T00:00:00-0400"
//     }
//   ],
//   "prices": [
//     {
//       "type": "printPrice",
//       "price": 0.2
//     },
//     {
//       "type": "digitalPurchasePrice",
//       "price": 0
//     }
//   ],
//   "thumbnail": {
//     "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3",
//     "extension": "jpg"
//   },
//   "images": [
//     {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3",
//       "extension": "jpg"
//     }
//   ],
//   "creators": {
//     "available": 3,
//     "collectionURI": "http://gateway.marvel.com/v1/public/comics/47176/creators",
//     "items": [
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/13586",
//         "name": "Joe Caramagna",
//         "role": "writer"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
//         "name": "Vc Joe Caramagna",
//         "role": "letterer"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
//         "name": "Stephen Wacker",
//         "role": "editor"
//       }
//     ],
//     "returned": 3
//   },
//   "characters": {
//     "available": 5,
//     "collectionURI": "http://gateway.marvel.com/v1/public/comics/47176/characters",
//     "items": [
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017100",
//         "name": "A-Bomb (HAS)"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017098",
//         "name": "Hulk (HAS)"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017099",
//         "name": "Red Hulk (HAS)"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017111",
//         "name": "She-Hulk (HAS)"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017101",
//         "name": "Skaar (HAS)"
//       }
//     ],
//     "returned": 5
//   },
//   "stories": {
//     "available": 2,
//     "collectionURI": "http://gateway.marvel.com/v1/public/comics/47176/stories",
//     "items": [
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/105929",
//         "name": "cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/105930",
//         "name": "story from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
//         "type": "interiorStory"
//       }
//     ],
//     "returned": 2
//   },
//   "events": {
//     "available": 0,
//     "collectionURI": "http://gateway.marvel.com/v1/public/comics/47176/events",
//     "items": [],
//     "returned": 0
//   }
// }
