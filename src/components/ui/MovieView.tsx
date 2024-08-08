import React from 'react'
import ReactPlayer from 'react-player'

const MovieView = ({ id }: { id?: string | null | number }) => {
    return (
        <div className='movie-view'>
            <div className=" w-full h-full ">
                <iframe
                    className='w-full h-full'
                    allowFullScreen
                    src={`https://vidsrc.xyz/embed/movie/${id}`}
                ></iframe>
            </div>
        </div >
    )
}

export default MovieView