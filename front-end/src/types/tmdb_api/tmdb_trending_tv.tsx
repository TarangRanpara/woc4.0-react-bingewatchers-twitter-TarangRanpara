import TMDB_200 from './tmdb_200'; 

type TV = {
    original_name: string,
    origin_country: string[],
    genre_ids: number[],
    original_language: string,
    first_air_date: string,
    poster_path: string | null,
    vote_count: number,
    vote_average: number,
    id: number,
    overview: string, 
    name: string,
    backdrop_path: string | null,
    popularity: number,
    media_type: string
    }

interface TrendingTV extends TMDB_200{
    results: TV[]
}

export default TrendingTV;