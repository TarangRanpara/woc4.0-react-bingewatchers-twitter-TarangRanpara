import TMDB_200 from './tmdb_200'; 

type Movie = {
    original_language: string,
    original_title: string,
    poster_path: string | null,
    video: boolean,
    vote_average: number,
    overview: string, 
    release_date: string,
    vote_count: number,
    adult: boolean,
    backdrop_path: string | null,
    id: number,
    genre_ids: number[],
    title: string,
    popularity: number,
    media_type: string 
}

interface TrendingMovies extends TMDB_200{
    results: Movie[]
}

export default TrendingMovies;