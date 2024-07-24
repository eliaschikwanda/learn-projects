import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setGames] = useState<T[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController(); // The cancel function passed as a second argument in the get function

        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal} )
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

    return {data, error, isLoading}
}

export default useData