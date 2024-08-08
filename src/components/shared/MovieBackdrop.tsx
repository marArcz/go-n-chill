import { tmdbImage } from '@/lib/utils';


type MovieBackdropProps = {
    imgUrl?: string;
    trailerKey?: string | null
}

const MovieBackdrop = ({ imgUrl }: MovieBackdropProps) => {

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
}

export default MovieBackdrop