import axios from "axios"
import { tmdbConfig } from "./config"
import { IGetMovieListResponseData, IMovie, IMovieCategory, IMovieDetails, IMovieVideo } from "../../types";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + tmdbConfig.accessToken
    }
})


// movie list
export async function getMovies(category: IMovieCategory, page = 1, limit: number | null = null, language = 'en-US'): Promise<IGetMovieListResponseData> {
    try {
        const res = await axiosInstance.get<IGetMovieListResponseData>(`/movie/${category}?language=${language}&page=${page}`);

        if (limit) {
            const movieList = res.data.results.slice(0, limit);

            return {
                ...res.data,
                results: movieList
            }
        }
        return res.data;
    } catch (error) {
        throw error;
    }
}

export async function getMovieById(id: number | null | string): Promise<IMovieDetails> {
    try {
        const res = await axiosInstance.get<IMovieDetails>(`/movie/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export async function getMovieTrailer(id: number): Promise<IMovieVideo | null> {
    try {
        const res = await axiosInstance.get<{ results: IMovieVideo[] }>(`/movie/${id}/videos`);
        const videos = res.data.results;
        const trailer = videos.find((video: IMovieVideo) => video.type.toLowerCase() === 'trailer');

        if (!trailer) return null;

        return trailer;
    } catch (error) {
        throw error;
    }
}

