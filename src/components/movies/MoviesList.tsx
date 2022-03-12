import { Movie } from '../../types'
import MovieItem from './MovieItem'

type Props = {
  movies: Movie[]
}

const MoviesList = ({ movies }: Props) => {
  return (
    <section className='' >
      <h1 className='text-4xl flex justify-center  text-gray-50 font-serif ' >Available movies &mdash;  <span className='text-orange-400' >  {movies.length} </span> </h1>
      <ul>
        {movies.map(movie => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </section>
  )
}

export default MoviesList