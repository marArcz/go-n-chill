import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "./queryKeys"
import { getMovieById, getMovies } from "../tmdb/api"

export const useGetNowPlaying = (page = 1, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_NOW_PLAYING],
        queryFn: () => getMovies('now_playing', page, language)
    })
}
export const useGetPopular = (page = 1, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_POPULAR],
        queryFn: () => getMovies('popular', page, language)
    })
}
export const useGetTopRated = (page = 1, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_TOP_RATED],
        queryFn: () => getMovies('top_rated', page, language)
    })
}
export const useGetUpcoming = (page = 1, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_UPCOMING],
        queryFn: () => getMovies('upcoming', page, language)
    })
}

export const useGetMovieById = (id:number) => {
    return useQuery({
        queryKey:[QUERY_KEYS.GET_MOVIE_BY_ID],
        queryFn:() => getMovieById(id)
    })
}