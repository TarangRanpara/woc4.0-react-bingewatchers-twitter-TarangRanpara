import TMDB_Trending from './TMDB_Trending';
import TrendingMovies from '../types/tmdb_api/tmdb_trending_movie';
import { type } from 'os';

class TMDB_Trending_Movies extends TMDB_Trending{
    constructor(category: string, period: string){
        super(category, period);
    }

    async get(){
        const response = await this.generateResponse();
        
        const data_object = JSON.parse(response);
        

        if(data_object.status == 200){
            const data: TrendingMovies = data_object.data;
            const results = data.results; 
            const filtered_results = []
            
            for (let index = 0; index < results.length; index++) {
                const element = results[index];
                filtered_results.push({
                    title: element.title, 
                    release_date: element.release_date,
                    overview : element.overview, 
                    original_language: element.original_language, 
                    adult: element.adult, 
                    vote_average: element.vote_average, 
                    vote_count : element.vote_count
                });
            }
            
            return {status: data_object.status, results: filtered_results}
        }else{
            return {status: 401}
        }
    }
}

export default TMDB_Trending_Movies; 