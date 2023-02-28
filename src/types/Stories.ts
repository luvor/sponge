//   {
//     "id": 7,
//     "title": "Investigating the murder of a teenage girl, Cage suddenly learns that a three-way gang war is under way for control of the turf",
//     "description": "",
//     "resourceURI": "http://gateway.marvel.com/v1/public/stories/7",
//     "type": "story",
//     "modified": "1969-12-31T19:00:00-0500",
//     "thumbnail": null,
//     "creators": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/stories/7/creators",
//       "items": [],
//       "returned": 0
//     },
//     "characters": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/stories/7/characters",
//       "items": [],
//       "returned": 0
//     },
//     "series": {
//       "available": 1,
//       "collectionURI": "http://gateway.marvel.com/v1/public/stories/7/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/6",
//           "name": "CAGE HC (2002)"
//         }
//       ],
//       "returned": 1
//     },
//     "comics": {
//       "available": 1,
//       "collectionURI": "http://gateway.marvel.com/v1/public/stories/7/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/941",
//           "name": "CAGE HC (Hardcover)"
//         }
//       ],
//       "returned": 1
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/stories/7/events",
//       "items": [],
//       "returned": 0
//     },
//     "originalIssue": {
//       "resourceURI": "http://gateway.marvel.com/v1/public/comics/941",
//       "name": "CAGE HC (Hardcover)"
//     }
//   },

export interface Story {
  id: number
  title: string
  description: string
  resourceURI: string
  type: string
  modified: string
  thumbnail: null
  creators: {
    available: number
    collectionURI: string
    items: []
    returned: number
  }
  characters: {
    available: number
    collectionURI: string
    items: []
    returned: number
  }
  series: {
    available: number
    collectionURI: string
    items: []
    returned: number
  }
  comics: {
    available: number
    collectionURI: string
    items: []
    returned: number
  }
  events: {
    available: number
    collectionURI: string
    items: []
    returned: number
  }
}
