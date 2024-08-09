import MovieBackdrop from "@/components/shared/MovieBackdrop";
import MovieList from "@/components/shared/MovieList";
import NowPlayingMovieList from "@/components/ui/NowPlayingMovieList";
import { useGetNowPlaying, useGetPopular, useGetTopRated } from "@/lib/react-query/queriesAndMutations"
import { getMovieById } from "@/lib/tmdb/api";
import { IMovieDetails } from "@/types";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {
    const [activeMovieIndex, setActiveMovieIndex] = useState(0);
    const { data: nowPlaying, isPending: isNowPlayingLoading } = useGetNowPlaying(1, 5)
    const { data: popularMovies, isPending: isPopularMoviesLoading } = useGetPopular(1);
    const { data: topRatedMovies, isPending: isTopRatedMoviesLoading } = useGetTopRated(1);
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
            <section className="hero w-full overflow-x-hidden">
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
                    <h2 className="text-2xl">What's Popular</h2>
                    <MovieList
                        isLoading={isPopularMoviesLoading}
                        movies={popularMovies?.results || []}
                    />
                </div>
            </section>
            <section id="top-rated-movies" className="mt-4 py-5">
                <div className="padded-container text-white">
                    <h2 className="text-2xl">Top Rated Movies</h2>
                    <div className="movie-list-hor custom-scrollbar mt-4 ">
                    <MovieList
                        isLoading={isTopRatedMoviesLoading}
                        movies={topRatedMovies?.results || []}
                    />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home