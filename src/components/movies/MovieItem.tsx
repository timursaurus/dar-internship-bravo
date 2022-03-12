import { useState } from 'react'
import { Movie } from '../../types'

type Props = {
  movie: Movie
}

const MovieItem = ({ movie }: Props) => {

  function durationConverter(mins: number): string {
    const h = Math.floor(mins / 60)
    const m = mins % 60
    return `${h > 0 ? h + 'h' : ''} ${m > 0 ? m + 'm' : ''}`
  }

  const [watchLater, setWatchLater] = useState(false)

  return (
    <>
      <li className='py-2 hover:bg-dark-300 duration-200 my-2 max-w-screen-lg border-b border-dark-200  container ' >
        <div className='md:flex children:mr-2 ' >
          <div>
            <img className='sm:max-w-70  ' src={movie.image} alt={movie.title} />
          </div>
          <div>
            <h2 className='text-2xl font-semibold text-gray-50 ' >{movie.title}</h2>
            <div className='my-1' >
              <span className=' text-gray-300' > {durationConverter(movie.duration)} | {movie.genre} </span>
            </div>
            <div >
              <span className='font-medium text-gray-300 ' > {movie.description} </span>
            </div>
            <div className='py-2' >
              <button onClick={() => setWatchLater(!watchLater)} className='bg-dark-200 hover:(text-blue-500 bg-dark-100 ) duration-100 px-2 rounded text-light-900 border border-dark-50 ' >
                {watchLater ? 'Remove from Watch Later' : 'Watch Later'}
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default MovieItem