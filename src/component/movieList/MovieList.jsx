import CardList from "../cardList/CardList";
import { UlMovieList } from "../global/Global";

function MovieList({ movies, deleteMovieHandler }) {
  return (
    <UlMovieList>
      {movies.map((element, index) => {
        return (
          <CardList
            deleteMovieHandler={deleteMovieHandler}
            element={element}
            key={index}
          />
        );
      })}
    </UlMovieList>
  );
}

export default MovieList;
