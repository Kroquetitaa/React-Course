import React, { useContext } from "react";
import { SWContext } from "../context/context";

const Movies = () => {
  const { movies, user } = useContext(SWContext);
  return (
    <div>
      { user!= undefined ? movies.map((movie) => (
        <p key={movie._id}>{movie.name}</p>
      )) : <p>No hay usuario</p>}
    </div>
  );
};

export default Movies;