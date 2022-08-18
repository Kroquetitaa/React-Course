import React, { useContext } from "react";
import { SWContext } from "../context/context";

const Characters = () => {
  const { characters, user } = useContext(SWContext);
  return (
    <div>
      {user != undefined ? characters.map((character) => (
        <p key={character._id}>{character.name}</p>
      )) : <p>No hay usuario</p>}
    </div>
  );
};

export default Characters;