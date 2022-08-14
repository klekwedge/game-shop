/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import RAWG from '../../services/RAWG';
import { currentGenreFetched, currentGenreFetchingError } from '../../actions/actions';
import { gamesFetched, gamesFetching, gamesFetchingError } from '../../slices/gamesSlices';
import Spinner from '../Spinner/Spinner';

function GameList({ genreName, mainTitle, descr }) {
  const { genre } = useParams();
  const { currentGenre, genres } = useSelector((state) => state.genres);
  const { games, gamesLoadingStatus } = useSelector((state) => state.games);

  const dispatch = useDispatch();
  const rawgService = new RAWG();

  useEffect(() => {
    dispatch(gamesFetching());
    if (genreName) {
      rawgService
        .getGameList(genreName)
        .then((data) => dispatch(gamesFetched(data)))
        .catch(() => dispatch(gamesFetchingError()));
    } else {
      rawgService
        .getGameList()
        .then((data) => dispatch(gamesFetched(data)))
        .catch(() => dispatch(gamesFetchingError()));
    }
  }, [genreName]);

  useEffect(() => {
    if (genres && genre) {
      const test = genres.results.find((genreItem) => genreItem.slug === genre);
      rawgService
        .getGenreDetail(test.id)
        .then((genreData) => dispatch(currentGenreFetched(genreData)))
        .catch(() => dispatch(currentGenreFetchingError()));
    }
  }, [genreName, genres]);

  if (gamesLoadingStatus === 'loading') {
    return <Spinner />;
  }
  if (gamesLoadingStatus === 'error') {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  return (
    <section>
      <h2 className="text-5xl font-bold mb-2 capitalize">{genre ? `${genre} games` : mainTitle}</h2>
      <h3 className="text-base mb-8">{currentGenre ? currentGenre.description : descr}</h3>
      {games ? (
        <ul className="flex gap-5 flex-wrap">
          {games.results.map((game) => (
            <li
              className="flex flex-col items-center gap-2 bg-zinc-900 basis-1/5 grow-0 pb-2 cursor-pointer rounded-lg hover:scale-105 duration-300"
              key={game.id}
            >
              <Link to={`/${game.id}`}>
                <img
                  src={game.background_image}
                  alt={game.background_image}
                  className="max-h-36 object-cover mb-2"
                />
                <h4 className="px-2 text-center">{game.name}</h4>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default GameList;
