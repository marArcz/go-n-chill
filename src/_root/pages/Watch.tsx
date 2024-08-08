import MovieBackdrop from '@/components/shared/MovieBackdrop';
import MovieView from '@/components/ui/MovieView';
import { useGetMovieById } from '@/lib/react-query/queriesAndMutations';
import { tmdbImage } from '@/lib/utils';
import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import { useParams } from 'react-router-dom'

const Watch = () => {
    const { id } = useParams();
    const { data: movie } = useGetMovieById(id || '');


    return (
        <>
            <MovieView id={id}/>
            <section className='w-full'>
                <MovieBackdrop
                    imgUrl={movie?.backdrop_path}
                />
                <div className="mt-[-30vh] padded-container relative">
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
                                <div className="grid-container w-full mt-10">
                                    <button key={movie.id} className="flex group justify-center items-center relative h-[160px] btn-play group">
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

                </div>
            </section>
        </>
    )
}

export default Watch