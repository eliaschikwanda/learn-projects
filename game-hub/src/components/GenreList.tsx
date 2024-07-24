import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <ul>
        {data.map((genre) => (<li>{genre.name}</li>))}
      </ul>
    </>
  );
};

export default GenreList;
