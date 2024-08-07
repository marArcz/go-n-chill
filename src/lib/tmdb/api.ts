import axios from "axios"
import { tmdbConfig } from "./config"
import { IGetMovieListResponseData, IMovie, IMovieCategory } from "../../types";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: tmdbConfig.accessToken
    }
})


// movie list
export async function getMovies(category: IMovieCategory, page = 1, language = 'en-US'): Promise<IGetMovieListResponseData> {
    try {
        const res = await axiosInstance.get<IGetMovieListResponseData>(`/movie/${category}?language=${language}&page=${page}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export async function getMovieById(id: number): Promise<IMovie> {
    try {
        const res = await axiosInstance.get<IMovie>(`/movie/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

