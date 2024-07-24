import useData from "./useData";

export interface Genre {
    id: number;
    name: number;
    image_background: string;
}

const useGenres = () => useData<Genre>('/genres');


export default useGenres