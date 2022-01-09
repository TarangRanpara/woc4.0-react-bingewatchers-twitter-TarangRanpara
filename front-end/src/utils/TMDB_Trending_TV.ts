import TMDB_Trending from './TMDB_Trending'; 
import TrendingTV from '../types/tmdb_api/tmdb_trending_tv';

class TMDB_Trending_TV extends TMDB_Trending{
    constructor(category: string, period: string){
        super(category, period);
    }

    async get(){
        const response = await this.generateResponse();
        
        const data_object = JSON.parse(response);
        

        if(data_object.status == 200){
            const data: TrendingTV = data_object.data;
            const results = data.results; 
            const filtered_results = []
            
            for (let index = 0; index < results.length; index++) {
                const element = results[index];
                filtered_results.push({
                    original_name: element.original_name, 
                    first_air_date: element.first_air_date, 
                    overview: element.overview, 
                    original_language: element.original_language, 
                    vote_average: element.vote_average, 
                    vote_count: element.vote_count
                });
            }
            
            return {status: data_object.status, results: filtered_results}
        }else{
            return {status: 401}
        }
    }
}

export default TMDB_Trending_TV; 