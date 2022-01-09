import TMDB_200 from './tmdb_200'; 

type Person = {
   id: number, 
   profile_path: string | null, 
   known_for: object[], 
   gender: number, 
   known_for_department: string, 
   adult: boolean, 
   name: string, 
   popularity: number, 
   media_type: string
}

interface TrendingPeople extends TMDB_200 {
    results: Person[]
}

export default TrendingPeople;





