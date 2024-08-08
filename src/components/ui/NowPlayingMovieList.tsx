import { tmdbImage } from '@/lib/utils';
import { IMovie } from '@/types';
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom';

type IProps = {
    isLoading:boolean;
    movies:IMovie[],
    activeMovieIndex:number
    setActiveMovieIndex:(i:number) => void
    className?:string
}

const NowPlayingMovieList = ({isLoading,movies,activeMovieIndex,setActiveMovieIndex, className=''}:IProps) => {
    return (
        <>
            <div className={`grid-container w-full ${className}`}>
                {
                    isLoading ? (
                        <>
                            <div className="flex justify-center items-center relative now-playing-card active h-[160px] overflow-clip">
                                {/* <img src="/images/garfield.jpg" className="w-full h-full object-cover absolute left-0 z-10 opacity-100 bg-slate-300" alt="" /> */}

                                <div className="w-full h-full bg-gray-500 absolute left-0 z-30 flex justify-center items-center" >
                                </div>
                            </div>
                            <div className="flex justify-center items-center relative now-playing-card h-[160px] overflow-clip">
                                <img src="/images/garfield.jpg" className="w-full h-full object-cover absolute left-0 z-10 opacity-70" alt="" />
                            </div>
                        </>
                    ) : (
                        <>


                            {
                                movies && movies.map((movie, index) => {
                                    if (index === activeMovieIndex) {
                                        return (
                                            <div key={movie.id} className="flex justify-center items-center relative now-playing-card active h-[160px] overflow-clip group">
                                                <img src={tmdbImage(movie.backdrop_path || '')} className="  w-full h-full object-cover absolute left-0 z-10 opacity-100 bg-slate-300" alt="" />
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
                                        <button key={movie.id} onMouseEnter={() => setActiveMovieIndex(index)} className="flex justify-center group items-center relative now-playing-card h-[160px] overflow-clip">
                                            <img src={tmdbImage(movie.backdrop_path)} className="w-full h-full object-cover absolute left-0 z-10 opacity-70 group-hover:opacity-100 transition" alt="" />
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