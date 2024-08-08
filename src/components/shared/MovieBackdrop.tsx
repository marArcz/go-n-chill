import { tmdbImage } from '@/lib/utils';
import React, { forwardRef } from 'react'
import ReactPlayer from 'react-player';


type MovieBackdropProps = {
    imgUrl?: string;
    trailerKey?: string | null
}

const MovieBackdrop = forwardRef(({ imgUrl, trailerKey }: MovieBackdropProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    return (
        <>
            <div className="relative">
                <div className="backdrop-overlay"></div>
                {
                    imgUrl ? (
                        <img src={tmdbImage(imgUrl)} alt="" className='h-[60vh] w-full object-cover object-top transition-all' />
                    ) : (
                        <div className="movie-backdrop h-[60vh]">
                        </div>
                    )
                }
            </div>
        </>
    )
})

export default MovieBackdrop