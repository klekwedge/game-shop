import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RAWG from '../../services/RAWG';
import { gamesFetched, gamesFetching, gamesFetchingError } from '../../actions/actions';

function GameList() {
  const { games } = useSelector((state) => state);
  const dispatch = useDispatch();
  const rawgService = new RAWG();

  useEffect(() => {
    dispatch(gamesFetching());
    rawgService
      .getGameList()
      .then((data) => dispatch(gamesFetched(data)))
      .catch(() => dispatch(gamesFetchingError()));
  }, []);

  return (
    <section>
      <h2 className="text-5xl font-bold mb-2">Games</h2>
      <h3 className="text-base mb-4">Popular games</h3>
      {games ? (
        <ul className="flex gap-5 flex-wrap">
          {games.results.map((game) => (
            <li
              className="flex flex-col items-center gap-2 bg-zinc-900 basis-1/5 grow-0 pb-2 cursor-pointer"
              key={game.id}
            >
              <Link to={`${game.id}`}>
                <img
                  src={game.background_image}
                  alt={game.background_image}
                  className="object-cover"
                />
                <div className="px-2">{game.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default GameList;
