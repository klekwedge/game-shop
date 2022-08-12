import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';
import RAWG from '../../services/RAWG';
import { genresFetched, genresFetchingError } from '../../actions/actions';

function SidePanel() {
  const rawgService = new RAWG();

  // const { genres } = useSelector((state) => state.genres);

  const dispatch = useDispatch();
  useEffect(() => {
    rawgService
      .getGenres()
      .then((genresData) => dispatch(genresFetched(genresData)))
      .catch(() => dispatch(genresFetchingError()));
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-medium mb-2">Genres</h2>
      <ul className="flex flex-col gap-1 text-xl">
        {/* {genres && genres.results.length > 0
          ? genres.results.map((genre) => (
            <li className="cursor-pointer" key={genre.id}>
              {genre.name}
            </li>
          ))
          : null} */}
        {/* {console.log(genres)} */}
        <li className="cursor-pointer">
          <NavLink
            to="/games/action"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
          >
            Action
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/games/strategy"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
          >
            Strategy
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/games/role-playing-games-rpg"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
          >
            RPG
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/games/shooter"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
          >
            Shooter
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/games/adventure"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
          >
            Adventure
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/games/indie"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
          >
            Indie
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/games/racing"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
          >
            Racing
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/games/sports"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
          >
            Sports
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default SidePanel;
