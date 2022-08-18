import React, { useContext } from "react";
import { SWContext } from "../context/context";

const Planets = () => {
  const { planets, user } = useContext(SWContext);
  return (
    <div>
      {user != undefined ? (
        planets.map((planet) => <p key={planet._id}>{planet.name}</p>)
      ) : (
        <p>No hay usuario</p>
      )}
    </div>
  );
};

export default Planets;