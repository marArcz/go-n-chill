import { tmdbImage } from '@/lib/utils';
import { IMovie } from '@/types';
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom';

type IProps = {
    isLoading: boolean;
    movies: IMovie[],
    activeMovieIndex: number
    setActiveMovieIndex: (i: number) => void
    className?: string
}

const NowPlayingMovieList = ({ isLoading, movies, activeMovieIndex, setActiveMovieIndex, className = '' }: IProps) => {
    return (
        <>
            <p className=" text-end text-xl text-gray-400 mb-3 mt-4">Trending</p>
            <div className={`grid-container mt-0 w-full ${className}`}>
                {
                    isLoading ? (
                        <>
                            <div className="flex justify-center items-center relative glass h-[160px] overflow-clip rounded-[30px]">
                            </div>
                            <div className="flex justify-center items-center relative glass h-[160px] overflow-clip rounded-[30px]">
                            </div>
                            <div className="flex justify-center items-center relative glass h-[160px] overflow-clip rounded-[30px]">
                            </div>
                            <div className="flex justify-center items-center relative glass h-[160px] overflow-clip rounded-[30px]">
                            </div>
                            <div className="flex justify-center items-center relative glass h-[160px] overflow-clip rounded-[30px]">
                            </div>
                        </>
                    ) : (
                        <>
                            {
                                movies && movies.map((movie, index) => {
                                    if (index === activeMovieIndex) {
                                        return (
                                            <div key={movie.id} className="flex justify-center items-center relative now-playing-card active h-[160px] overflow-clip group">
                                                <img src={tmdbImage(movie.backdrop_path || '','w300')} className="  w-full h-full object-cover absolute left-0 z-10 opacity-100 bg-slate-300" alt="" />
                                                <div className="w-full h-full bg-gray-100 opacity-5 absolute left-0 z-30 flex justify-center items-center group-hover:opacity-30 transition-all" >
                                                </div>
                                                <Link to={`/watch/${movie.id}`} className="glass bg-white bg-opacity-60 hover:bg-opacity-80 transition-all shadow border border-white rounded-[10px] relative px-6 py-3 z-30">
                                                    <FaPlay
                                                        className=" text-brown "
                                                        size={24}
                                                    />
                                                </Link>
                                            </div>
                                        )
                                    }
                                    return (
                                        <button key={movie.id} tabIndex={index} onFocus={() => setActiveMovieIndex(index)} onMouseEnter={() => setActiveMovieIndex(index)} className="flex justify-center group items-center relative now-playing-card h-[160px] overflow-clip">
                                            <img src={tmdbImage(movie.backdrop_path,'w300')} className="w-full h-full object-cover absolute left-0 z-10 opacity-70 group-hover:opacity-100 transition" alt="" />
                                        </button>
                                    )
                                })
                            }
                        </>
                    )
                }
            </div>
        </>
    )
}

export default NowPlayingMovieList