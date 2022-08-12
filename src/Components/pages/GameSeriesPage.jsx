import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiExternalLink } from 'react-icons/fi';
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

  const { gamesOfSeries } = useSelector((state) => state);
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
    <main className="flex justify-between items-baseline gap-24 max-w-screen-2xl mx-auto px-5 py-3">
      {console.log(gamesOfSeries)}
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
      ) : null}
    </main>
  );
}

export default GameSeriesPage;
