import { formatDate, tmdbImage } from '@/lib/utils';
import { IMovie } from '@/types';
import { Link } from 'react-router-dom';

type Props = {
    isLoading:boolean;
    movies:IMovie[];
}

const MovieList = ({isLoading,movies}:Props) => {
    return (
        <>
            <div className="movie-list-hor custom-scrollbar mt-4 ">
                {
                    !isLoading && movies && movies.map((movie) => {
                        return (
                            <div key={movie.id} className="relative movie-card">
                                <Link to={`/watch/${movie.id}`}>
                                    <div className="relative movie-card__img overflow-clip rounded-[5px]">
                                        <img loading='lazy' src={tmdbImage(movie.poster_path,'w300')} className="absolute opacity-70 h-full object-cover w-full" />
                                    </div>
                                </Link>
                                <p className="mt-2 lg:text-lg lg:w-[232px] font-medium w-[150px] overflow-hidden text-ellipsis text-nowrap">{movie.title}</p>
                                <p className=' text-gray-400'>{formatDate(movie.release_date)}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MovieList