import axios from "axios";

export async function getMovieStreamSrc(id:number) {
    try {
        const res = await axios.get(`https://vidsrc.xyz/embed/movie?tmdb=${id}/`);
        console.log('vidsrc: ', res)
        return res.data;
    } catch (error) {
        throw error;
    }
}