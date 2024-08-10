import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "./queryKeys"
import { getMovieById, getMovies } from "../tmdb/api"

export const useGetNowPlaying = (page = 1, limit: number | null = null, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_NOW_PLAYING, page],
        queryFn: () => getMovies('now_playing', page, limit, language)
    })
}
export const useGetPopular = (page = 1, limit = null, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_POPULAR, page],
        queryFn: () => getMovies('popular', page, limit, language)
    })
}
export const useGetTopRated = (page = 1, limit = null, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_TOP_RATED, page],
        queryFn: () => getMovies('top_rated', page, limit, language)
    })
}
export const useGetUpcoming = (page = 1, limit = null, language = 'en-US') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_UPCOMING, page],
        queryFn: () => getMovies('upcoming', page, limit, language)
    })
}

export const useGetMovieById = (id: number | null | string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_MOVIE_BY_ID, id],
        queryFn: () => getMovieById(id),
        enabled: !!id
    })
}