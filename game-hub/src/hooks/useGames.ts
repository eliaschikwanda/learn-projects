import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;   
    parent_platforms:  {platform: Platform}[];
    metacritic: number;
}

const useGames = (selectedGenres: Genre | null) => useData<Game>('/games', {params: {genre: selectedGenres?.id}}, [selectedGenres?.id]) // This is allowed by the backend for filtering

export default useGames