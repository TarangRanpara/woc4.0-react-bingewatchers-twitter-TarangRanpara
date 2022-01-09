import TMDB_Trending from './TMDB_Trending'; 
import TrendingPeople from '../types/tmdb_api/tmdb_trending_person';

class TMDB_Trending_Person extends TMDB_Trending{
    constructor(category: string, period: string){
        super(category, period);
    }

    async get(){
        const response = await this.generateResponse();
        
        const data_object = JSON.parse(response);
        
        if(data_object.status == 200){
            const data: TrendingPeople = data_object.data;
            const results = data.results; 
            const filtered_results = []
            
            for (let index = 0; index < results.length; index++) {
                const element = results[index];
                filtered_results.push({
                    name: element.name, 
                    gender: element.gender, 
                    adult: element.adult, 
                    known_for_department: element.known_for_department
                });
            }
            
            return {status: data_object.status, results: filtered_results}
        }else{
            return {status: 401}
        }
    }
}

export default TMDB_Trending_Person; 