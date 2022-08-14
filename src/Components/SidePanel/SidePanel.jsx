import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';
import RAWG from '../../services/RAWG';
import { genresFetched, genresFetchingError } from '../../slices/genresSlice';

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
      <h2 className="text-2xl font-medium mb-2">Popular</h2>
      <ul className="flex flex-col gap-1 text-xl w-64 mb-5">
        <li className="cursor-pointer">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
            className="flex items-center gap-3"
          >
            Popular games
          </NavLink>
        </li>
      </ul>
      <h2 className="text-2xl font-medium mb-2">Genres</h2>
      <ul className="flex flex-col gap-1 text-xl w-64">
        {genres && genres.results.length > 0
          ? genres.results.map((genre) => (
            <li key={genre.id} className="cursor-pointer p-1">
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
      </ul>
    </section>
  );
}

export default SidePanel;
