import { AnimatePresence, motion } from "framer-motion";

type Props = {
    id?: string | null | number
    show?: boolean,
    handleClose: () => void
}

const MovieView = ({ id, show = false, handleClose }: Props) => {
    return (
        <>

            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='movie-view'
                        onClick={() => handleClose()}>
                        <div className="w-full glass overflow-clip rounded-md border-none lg:w-[80%] lg:h-[70vh] sm:h-[40vh] h-[30vh]">
                            <iframe
                                className='w-full h-full'
                                allowFullScreen
                                src={`https://vidsrc.xyz/embed/movie/${id}`}
                            ></iframe>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default MovieView