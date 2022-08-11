import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';
import RAWG from '../../services/RAWG';
import {
  currentGameFetching,
  currentGameFetched,
  currentGameFetchingError,
  currentGameReset,
} from '../../actions/actions';

function GamePage() {
  // eslint-disable-next-line no-unused-vars
  const { gameId } = useParams();
  const rawgService = new RAWG();

  const { currentGame } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentGameReset());
    dispatch(currentGameFetching());
    rawgService
      .getGame(gameId)
      .then((data) => dispatch(currentGameFetched(data)))
      .catch(() => dispatch(currentGameFetchingError()));
  }, [gameId]);

  return (
    <main className="">
      {currentGame ? (
        <>
          {console.log(currentGame)}
          <h1 className="text-5xl text-right mb-8">{currentGame.name}</h1>
          <div className="flex gap-10 items-center">
            <img
              src={currentGame.background_image}
              alt={currentGame.background_image}
              className="max-w-3xl rounded-lg"
            />
            <p className="bg-zinc-800 p-10 rounded-lg">{currentGame.description_raw}</p>
          </div>
        </>
      ) : null}
    </main>
  );
}

export default GamePage;
