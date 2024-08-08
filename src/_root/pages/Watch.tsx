import { useGetMovieById } from '@/lib/react-query/queriesAndMutations';
import { useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import MovieBackdrop from '@/components/shared/MovieBackdrop';

const Watch = () => {
    const { id } = useParams();
    const [showMovieView, setShowMovieView] = useState(false)
    const { data: movie } = useGetMovieById(id || '');

    return (
        <>
            {/* <MovieView handleClose={() => setShowMovieView(false)} id={id} show={showMovieView} /> */}
            <section className='w-full'>
                {/* <MovieBackdrop
                    imgUrl={movie?.backdrop_path}
                /> */}
                <div className="relative lg:h-[60vh] h-[40vh]">
                    <div className="backdrop-overlay"></div>
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
                                        className='w-full h-full object-cover'
                                        allowFullScreen
                                        src={`https://vidsrc.xyz/embed/movie/${id}`}
                                    ></iframe>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {!showMovieView && <MovieBackdrop imgUrl={movie?.backdrop_path} />}
                </div>
                <motion.div
                    initial={{
                        marginTop: '-20vh'
                    }}
                    animate={{
                        marginTop: showMovieView ? '20px' : '-20vh'
                    }}
                    className=" padded-container relative">
                    {
                        movie && (
                            <>
                                <div>
                                    <h1 className="text-white text-movie-title font-bold">{movie.title || movie.original_title}</h1>
                                    <ul className="flex flex-wrap gap-4 my-3">
                                        {
                                            movie.genres && movie.genres.map((genre) => (
                                                <li key={genre.id} className=" glass px-3 py-2 text-white font-bold">
                                                    {genre.name}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="grid-container lg:grid-cols-5 grid-cols-2 w-full mt-10">
                                    <button key={movie.id} onClick={() => setShowMovieView(s => !s)} className="flex group lg:col-span-1 sm:col-span-1 col-span-2 justify-center items-center relative h-[160px] btn-play group">
                                        <div className=" relative z-30 group-hover:scale-110 transition-all">
                                            <FaPlay
                                                className=" text-white "
                                                size={45}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </>
                        )
                    }

                </motion.div>
            </section>
        </>
    )
}

export default Watch