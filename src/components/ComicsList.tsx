import ComicsCard from './ComicsCard'

import { Comic } from '../types'

export default function ComicsList({ comics, isLoading }: { comics: Comic[]; isLoading: boolean }) {
  // make pinterest style grid with 3 columns in tailwind
  const styles = {
    pin_container: {
      margin: 0,
      padding: 0,
      width: '100%',
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 250px)',
      gridAutoRows: '10px',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      justifyContent: 'center',
      backgroundColor: 'black',
      overflow: 'hidden',
    },
  } as { [key: string]: React.CSSProperties }

  return (
    <div style={styles.pin_container}>
      {isLoading ? (
        <div>Загружаем...</div>
      ) : (
        comics.map((comic: any) => {
          const random = Math.floor(Math.random() * 3)
          const sizes = ['small', 'medium', 'large']
          let size = sizes[random]
          return <ComicsCard key={comic.id} comic={comic} size={size} />
        })
      )}
    </div>
  )
}
