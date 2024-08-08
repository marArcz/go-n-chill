import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "./queryKeys"
import { getMovieById, getMovies } from "../tmdb/api"

export const useGetNowPlaying = (page = 1, limit: number | null = null, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_NOW_PLAYING],
        queryFn: () => getMovies('now_playing', page, limit, language)
    })
}
export const useGetPopular = (page = 1, limit = null, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_POPULAR],
        queryFn: () => getMovies('popular', page, limit, language)
    })
}
export const useGetTopRated = (page = 1, limit = null, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_TOP_RATED],
        queryFn: () => getMovies('top_rated', page, limit, language)
    })
}
export const useGetUpcoming = (page = 1, limit = null, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_UPCOMING],
        queryFn: () => getMovies('upcoming', page, limit, language)
    })
}

export const useGetMovieById = (id: number | null | string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_MOVIE_BY_ID],
        queryFn: () => getMovieById(id),
        enabled: !!id
    })
}