import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
}

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const controller = new AbortController(); // The cancel function passed as a second argument in the get function

        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal} )
        .then((res)=> {setGames(res.data.results)})
        .catch((err) => {
            if(err instanceof CanceledError) return; // Because the error message will be assigned to cancel
            setError(err.message);
        });

        return () => {controller.abort()} // Call the function to stop the call to the server
    }, []);

    return {games, error}

}

export default useGames