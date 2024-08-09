import { useGetMovieById } from '@/lib/react-query/queriesAndMutations';
import { useState } from 'react'
import { FaPlay, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import MovieBackdrop from '@/components/shared/MovieBackdrop';
import { formatDate, tmdbImage } from '@/lib/utils';
import SoundWaveAnim from '@/components/shared/SoundWaveAnim';

const Watch = () => {
    const { id } = useParams();
    const [showMovieView, setShowMovieView] = useState(false)
    const { data: movie } = useGetMovieById(id || '');

    return (
        <>
            {/* <MovieView handleClose={() => setShowMovieView(false)} id={id} show={showMovieView} /> */}
            <section className='w-full'>
                <div className="relative w-full lg:h-[70vh] h-[40vh] overflow-hidden">

                    <AnimatePresence>
                        {showMovieView && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className='h-full absolute w-full'
                            >
                                <div className="h-full w-full">
                                    <iframe
                                        onLoadedData={() => console.log('loaded')}
                                        className='w-full h-full object-cover'
                                        allowFullScreen
                                        src={`https://vidsrc.xyz/embed/movie/${id}`}
                                    // src={`https://www.2embed.cc/embed/${id}`}
                                    ></iframe>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {!showMovieView && (
                        <>
                            <div className="backdrop-overlay"></div>
                            <MovieBackdrop imgUrl={movie?.backdrop_path} />
                        </>
                    )}
                </div>
                <motion.div
                    className={` transition-all padded-container relative ${showMovieView ? 'lg:mt-10 mt-4' : 'lg:mt-[-40vh] mt-[-20vh]'} mb-10`}>
                    <div className="flex lg:flex-row flex-col gap-x-10 gap-y-2 ">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={`lg:w-[300px] lg:h-[400px] w-[200px] glass-card overflow-clip ${showMovieView ? 'lg:block md:block hidden' : ''}`}>
                                <img src={tmdbImage(movie?.poster_path || '')} className='w-full h-full opacity-70 max-h-full max-w-full bg-gray-600' alt={movie?.title || ''} />
                            </motion.div>
                        </AnimatePresence>
                        <div className='flex-1'>
                            {
                                movie && (
                                    <div className='lg:mt-[50px] mt-1'>
                                        <div>
                                            <h1 className="text-white lg:text-movie-title text-2xl font-bold">{movie.title || movie.original_title}</h1>
                                            <ul className="flex flex-wrap gap-4 lg:mt-7 mt-4">
                                                {
                                                    movie.genres && movie.genres.map((genre) => (
                                                        <li key={genre.id} className=" glass px-3 py-2 text-white font-bold">
                                                            {genre.name}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="grid-container gap-y-5 lg:grid-cols-5 grid-cols-2 w-full mt-10">
                                            <button key={movie.id} onClick={() => setShowMovieView(s => !s)} className="flex group lg:col-span-1 sm:col-span-1 col-span-2 justify-center items-center relative h-[140px] btn-play group">
                                                <div className=" relative z-30 group-hover:scale-110 transition-all">
                                                    {
                                                        showMovieView ? (
                                                            <SoundWaveAnim />
                                                        ) : (
                                                            <FaPlay
                                                                className=" text-white "
                                                                size={45}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </button>
                                            <div className="glass-card p-4 text-white h-[140px]">
                                                <p className='text-white font-[100] text-lg'>Rating</p>
                                                <p className="font-semibold text-2xl mt-3 text-center">PG</p>
                                            </div>
                                            <div className="glass-card p-4 text-white h-[140px]">
                                                <p className='text-white font-[100] text-lg'>Score</p>
                                                <p className="font-semibold text-2xl mt-3 text-center flex gap-3 justify-center items-center">
                                                    <FaStar
                                                        className=" text-white "
                                                        size={25}
                                                    />
                                                    {movie?.vote_average}
                                                </p>
                                            </div>
                                            <div className="glass-card p-4 text-white h-[140px]">
                                                <p className='text-white font-[100] text-lg'>Release</p>
                                                <p className="font-semibold text-xl mt-3 text-center">{formatDate(movie.release_date)}</p>
                                            </div>
                                        </div>
                                        <div className="mt-10">
                                            <p className=' text-dim-gray lg:text-2xl text-lg font-medium'>OVERVIEW</p>
                                            <p className='text-white lg:text-2xl text-lg mt-2'>{movie?.overview}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </motion.div>
            </section>
        </>
    )
}

export default Watch