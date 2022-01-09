import axios from 'axios';
import TrendingTV from '../types/tmdb_api/tmdb_trending_tv';
import TrendingPeople from '../types/tmdb_api/tmdb_trending_person';

class TMDB_Trending{

    base_url: string; 
    category: string; 
    period: string; 
    api_key: string;

    // category: movie, tv, person 
    // period: day, week 
    constructor(category:string, period: string){
        // ideally, it should be stored in env file 
        this.api_key = '311c55b9a3c52f38f20efc5ffa1d349e';
        this.category = category;
        this.period = period; 
        this.base_url = `https://api.themoviedb.org/3/trending/${ this.category }/${ this.period }?api_key=${ this.api_key }`
    }

    async generateResponse(){
        console.log('api call.')
        let res = '';
        try{
            let response = await axios.get(this.base_url);
            let string_resp = JSON.stringify({status:200, data: response.data});
            return string_resp;
        }catch(error){
            return JSON.stringify({status:401});
        }
    }

    get(){}
}

export default TMDB_Trending;