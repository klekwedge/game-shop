import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RAWG from '../../services/RAWG';

function GamePage() {
  // eslint-disable-next-line no-unused-vars
  const { gameId } = useParams();
  const rawgService = new RAWG();

  function onLoaded(data) {
    console.log(data);
  }

  function onError(e) {
    console.log(e);
  }

  useEffect(() => {
    rawgService.getGame(gameId).then(onLoaded).catch(onError);
  }, [gameId]);

  return <main className="flex justify-between items-baseline gap-24">GamePage</main>;
}

export default GamePage;
