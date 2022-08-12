import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';
import RAWG from '../../services/RAWG';
import { genresFetched, genresFetchingError } from '../../actions/actions';

function SidePanel() {
  const rawgService = new RAWG();

  const { genres } = useSelector((state) => state.genres);

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
      <ul className="flex flex-col gap-1 text-xl w-64">
        {genres && genres.results.length > 0
          ? genres.results.map((genre) => (
            <li key={genre.id} className="cursor-pointer">
              <NavLink
                to={`/games/${genre.slug}`}
                style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
                className="flex items-center gap-3"
              >
                <img
                  src={genre.image_background}
                  alt="Genre illustration"
                  className="w-12 h-12 object-contain"
                />
                {genre.name}
              </NavLink>
            </li>
          ))
          : null}

        {/* <li className="cursor-pointer">
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
          </NavLink> */}
        {/* </li> */}
      </ul>
    </section>
  );
}

export default SidePanel;
