import AppHeader from "@/components/AppHeader"
import MovieBackdrop from "@/components/shared/MovieBackdrop";
import NowPlayingMovieList from "@/components/ui/NowPlayingMovieList";
import { useGetNowPlaying, useGetPopular } from "@/lib/react-query/queriesAndMutations"
import { getMovieById } from "@/lib/tmdb/api";
import { tmdbImage } from "@/lib/utils";
import { IMovieDetails } from "@/types";
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {
    const [activeMovieIndex, setActiveMovieIndex] = useState(0);
    const { data: nowPlaying, isPending: isNowPlayingLoading } = useGetNowPlaying(1, 5)
    const { data: popularMovies, isPending: isPopularMoviesLoading } = useGetPopular(1);
    const [activeMovie, setActiveMovie] = useState<IMovieDetails | null>(null)

    useEffect(() => {
        if (nowPlaying) {
            getMovieById(nowPlaying.results[activeMovieIndex]?.id)
                .then((movie) => {
                    setActiveMovie(movie)
                })
        }
    }, [activeMovieIndex, nowPlaying]);

    return (
        <>
            <section className="hero w-full">
                <MovieBackdrop imgUrl={activeMovie?.backdrop_path} />
                <div className="mt-[-30vh] padded-container relative">
                    {
                        activeMovie && (
                            <div>
                                <h1 className="text-white text-movie-title font-bold">{activeMovie.title || activeMovie.original_title}</h1>
                                <ul className="flex flex-wrap gap-4 my-3">
                                    {
                                        activeMovie.genres && activeMovie.genres.map((genre) => (
                                            <li key={genre.id} className=" glass px-3 py-2 text-white font-bold">
                                                <Link to={'#'}>
                                                    {genre.name}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                    <NowPlayingMovieList
                        className="mt-8"
                        movies={nowPlaying?.results || []}
                        activeMovieIndex={activeMovieIndex}
                        setActiveMovieIndex={setActiveMovieIndex}
                        isLoading={isNowPlayingLoading}
                    />
                </div>
            </section>
            <section id="popular-movies" className="mt-4 py-5">
                <div className="padded-container text-white">
                    <h2 className="text-2xl">Popular Movies</h2>
                    <div className="movie-list-hor mt-4 ">
                        {
                            popularMovies && popularMovies.results.map((movie) => {
                                return (
                                    <div key={movie.id} className="relative movie-card">
                                        <Link to={`/watch/${movie.id}`}>
                                            <div className="relative movie-card__img overflow-clip rounded-[5px]">
                                                <img src={tmdbImage(movie.poster_path)} className="absolute opacity-70 h-full object-cover w-full" />
                                            </div>
                                        </Link>
                                        <p className="mt-2 lg:text-lg text-ellipsis ">{movie.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home