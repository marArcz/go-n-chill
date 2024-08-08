import React from 'react'
import ReactPlayer from 'react-player'

type Props = {
    id?: string | null | number
    show?: boolean
}

const MovieView = ({ id, show=false }: Props) => {
    if(!show) return
    return (
        <div className='movie-view'>
            <div className=" w-full h-full ">
                <iframe
                    className='w-full h-full'
                    allowFullScreen
                    src={`https://vidsrc.xyz/embed/movie/${id}`}
                ></iframe>
            </div>
        </div>
    )
}

export default MovieView