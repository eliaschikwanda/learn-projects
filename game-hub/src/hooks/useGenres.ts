import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id: number;
    name: number;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGames] = useState<Genre[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController(); // The cancel function passed as a second argument in the get function

        setLoading(true);
        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal} )
        .then((res)=> {
            setGames(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return; // Because the error message will be assigned to cancel
            setError(err.message);
            setLoading(false);
        });

        return () => {controller.abort()} // Call the function to stop the call to the server
    }, []);

    return {genres, error, isLoading}
}

export default useGenres