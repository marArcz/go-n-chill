export type IMovie = {
    id: number,
    title: string,
    original_title: string,
    overview: string,
    release_date: string,
    vote_average: number,
    vote_count: number,
    popularity: number,
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
}

export type IGetMovieListResponseData = {
    date: { maximum: string, minimum: string },
    page: number,
    results: IMovie[],
    total_pages:number,
    total_results:number,
}

export type IMovieCategory = 'now_playing' | 'popular' | 'top_rated' | 'upcoming'