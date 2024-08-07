import { tmdbImage } from '@/lib/utils';
import React, { forwardRef, useEffect, useState } from 'react'
import ReactPlayer from 'react-player';


type MovieBackdropProps = {
    imgUrl?: string;
}

const MovieBackdrop = forwardRef(({ imgUrl }: MovieBackdropProps, ref:React.ForwardedRef<HTMLDivElement>) => {

    return (
        <>
            <div className="relative ">
                <div className="backdrop-overlay"></div>
                {/* {
                    imgUrl ? (
                        <img src={tmdbImage(imgUrl)} alt="" className='h-[50vh] w-screen object-cover object-top transition-all' />
                    ) : (
                        <div className="movie-backdrop h-[45vh]">
                        </div>
                    )
                } */}
                <div className='trailer-container h-[50vh] w-screen p-0' ref={ref}>

                </div>
            </div>
        </>
    )
})

export default MovieBackdrop