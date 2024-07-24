import useData from "./useData";

export interface Genre {
    id: number;
    name: number;
}

const useGenres = () => useData<Genre>('/genres');


export default useGenres