import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiExternalLink } from 'react-icons/fi';
import { MdKeyboardBackspace } from 'react-icons/md';
import RAWG from '../../services/RAWG';
import {
  gameSeriesFetching,
  gameSeriesFetched,
  gameSeriesFetchingError,
  gameSeriesReset,
} from '../../actions/actions';

function GameSeriesPage() {
  const { gameId } = useParams();

  const rawgService = new RAWG();

  const { gamesOfSeries } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameSeriesReset());
    dispatch(gameSeriesFetching());
    rawgService
      .getListOfGamesSeries(gameId)
      .then((data) => dispatch(gameSeriesFetched(data)))
      .catch(() => gameSeriesFetchingError());
  }, [gameId]);

  return (
    <main className="flex flex-col justify-between items-baseline gap-3 max-w-screen-2xl mx-auto px-5 pt-16 pb-2">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl self-end ease-in duration-200 hover:text-violet-700">
          <Link to="/" className="flex gap-2 items-center">
            <MdKeyboardBackspace size="40" />
            Store
          </Link>
        </h2>
      </div>
      {gamesOfSeries && gamesOfSeries.count > 0 ? (
        <div>
          <h2 className="text-4xl mb-8 font-medium">
            List of games that are part of the same series:
            {` ${gamesOfSeries.count}`}
          </h2>
          <ul className="flex flex-wrap gap-5">
            {gamesOfSeries.results.map((gameItem) => (
              <li
                key={gameItem.id}
                className="flex flex-col basis-1/5 rounded-lg gap-2 bg-zinc-700 hover:scale-105 duration-300 relative"
              >
                <img
                  src={gameItem.background_image}
                  alt={gameItem.background_image}
                  className="object-cover max-h-40"
                />
                <h3 className="self-center px-2 pb-2">{gameItem.name}</h3>
                <Link to={`/${gameItem.id}`} className="absolute top-1 left-1">
                  <FiExternalLink size="25" className="bg-neutral-900 rounded-lg p-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2 className="text-4xl mb-8 font-medium">This game is not part of any series.</h2>
      )}
    </main>
  );
}

export default GameSeriesPage;
