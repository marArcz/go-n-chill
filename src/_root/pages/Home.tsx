import AppHeader from "@/components/AppHeader"
import MovieBackdrop from "@/components/shared/MovieBackdrop";
import { useGetNowPlaying } from "@/lib/react-query/queriesAndMutations"
import { tmdbImage } from "@/lib/utils";
import { getMovieStreamSrc } from "@/lib/videosrc/api";
import { IMovie } from "@/types";
import { useEffect, useRef, useState } from "react"
import { FaPlay } from "react-icons/fa";

const Home = () => {
    const [page, setPage] = useState(1);
    const [activeMovieTrailer, setActiveMovieTrailer] = useState(null)
    const trailerContainerRef = useRef<HTMLDivElement>(null);
    const { data: nowPlaying, isPending: isNowPlayingLoading, isError: isNowPlayingError } = useGetNowPlaying()
    const [activeMovie, setActiveMovie] = useState<IMovie | null>(nowPlaying?.results[0] || null)
    console.log('movies: ', nowPlaying)

    useEffect(() => {
        setActiveMovie(nowPlaying?.results[0] || null)
    }, [nowPlaying])

    useEffect(() => {
        if(activeMovie){
            getMovieStreamSrc(activeMovie.id)
            .then((embeddedSrc) => {
                if(trailerContainerRef.current){
                    trailerContainerRef.current.appendChild(embeddedSrc)
                }
            })
        }
    }, [activeMovie])
    

    return (
        <div>
            <AppHeader />
            <section className="hero relative w-screen">
                <MovieBackdrop imgUrl={activeMovie?.backdrop_path} ref={trailerContainerRef}/>
                <div className="mt-[-50px] padded-container relative">
                    {
                        activeMovie && (
                            <div>
                                <h1 className="text-white text-movie-title font-bold">{activeMovie.title || activeMovie.original_title}</h1>
                            </div>
                        )
                    }
                    <div className=" grid-container mt-5">
                        {
                            isNowPlayingLoading ? (
                                <>
                                    <div className="flex justify-center items-center relative now-playing-card active h-[160px] overflow-clip">
                                        {/* <img src="/images/garfield.jpg" className="w-full h-full object-cover absolute left-0 z-10 opacity-100 bg-slate-300" alt="" /> */}

                                        <div className="w-full h-full bg-gray-500 absolute left-0 z-30 flex justify-center items-center" >
                                        </div>
                                        <button className="glass bg-white bg-opacity-60 shadow border border-white rounded-[10px] relative px-6 py-3 z-30">
                                            <FaPlay
                                                className=" text-brown "
                                                size={24}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-center relative now-playing-card h-[160px] overflow-clip">
                                        <img src="/images/garfield.jpg" className="w-full h-full object-cover absolute left-0 z-10 opacity-70" alt="" />
                                    </div>
                                </>
                            ) : (
                                <>


                                    {
                                        nowPlaying?.results && nowPlaying.results.map((movie) => {
                                            if (movie.id === activeMovie?.id) {
                                                return (
                                                    <div key={movie.id}  className="flex justify-center items-center relative now-playing-card active h-[160px] overflow-clip group">
                                                        <img src={tmdbImage(activeMovie?.backdrop_path || '')} className="  w-full h-full object-cover absolute left-0 z-10 opacity-100 bg-slate-300" alt="" />
                                                        <div className="w-full h-full bg-gray-100 opacity-5 absolute left-0 z-30 flex justify-center items-center group-hover:opacity-30 transition-all" >
                                                        </div>
                                                        <button className="glass bg-white bg-opacity-60 hover:bg-opacity-80 transition-all shadow border border-white rounded-[10px] relative px-6 py-3 z-30">
                                                            <FaPlay
                                                                className=" text-brown "
                                                                size={24}
                                                            />
                                                        </button>
                                                    </div>
                                                )
                                            }
                                            return (
                                                <button key={movie.id} onMouseEnter={() => setActiveMovie(movie)} className="flex justify-center group items-center relative now-playing-card h-[160px] overflow-clip">
                                                    <img src={tmdbImage(movie.backdrop_path)} className="w-full h-full object-cover absolute left-0 z-10 opacity-70 group-hover:opacity-100 transition" alt="" />
                                                </button>
                                            )
                                        })
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home