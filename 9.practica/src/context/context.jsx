import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SWContext = createContext();

export const SWContextProvider = ({ children }) => {
  const BASEURL = "https://starwars-server.vercel.app";

  const [user, setUser] = useState(undefined);
  const [characters, setCharacters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [planets, setPlanets] = useState([]);

  const getCharacters = async () => {
    const raw = await axios.get(`${BASEURL}/characters`);
    setCharacters(raw.data.data.characters);
  };

  const getMovies = async () => {
    const raw = await axios.get(`${BASEURL}/movies`);
    setMovies(raw.data.data.movies);
  };

  const getPlanets = async () => {
    const raw = await axios.get(`${BASEURL}/planets`);
    setPlanets(raw.data.data.planets);
  };

  const loginUser = () => {
    setUser("Antonio");
  };

  const logoutUser = () => {
    setUser(undefined);
  }
 
  useEffect(() => {
    getCharacters();
    getMovies();
    getPlanets();
  }, []);

  return (
    <SWContext.Provider value={{ characters, movies, planets, user, loginUser, logoutUser }}>
      {children}
    </SWContext.Provider>
  );
};