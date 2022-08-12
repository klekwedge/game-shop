/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useParams } from 'react-router-dom';
import SidePanel from '../SidePanel/SidePanel';
import GameList from '../GameList/GameList';

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux/es/exports';

function GenrePage() {
  // eslint-disable-next-line no-unused-vars
  const { genre } = useParams();

  // const rawgService = new RAWG();

  // const { currentGame } = useSelector((state) => state.games);
  // const { screenshots } = useSelector((state) => state.screenshots);
  // const { movies } = useSelector((state) => state.movies);
  // const dispatch = useDispatch();

  // function onLoaded(data) {
  //   console.log(data);
  // }

  // function onError(data) {
  //   console.log(data);
  // }

  // useEffect(() => {
  //   dispatch(currentGameReset());
  //   dispatch(currentGameFetching());

  //   rawgService
  //     .getGame(gameId)
  //     .then((gameData) => dispatch(currentGameFetched(gameData)))
  //     .catch(() => dispatch(currentGameFetchingError()))
  //     .then(() => rawgService.getGameScreenshots(gameId))
  //     .then((screenshotsData) => dispatch(screenshotsFetched(screenshotsData)))
  //     .catch(() => dispatch(screenshotsFetchingError()))
  //     .then(() => rawgService.getGameTrailers(gameId))
  //     .then((moviesData) => dispatch(moviesFetched(moviesData)))
  //     .catch(() => dispatch(moviesFetchingError()));

  //   // rawgService
  //   //   .getGameAddOns(gameId)
  //   //   .then((data) => onLoaded(data))
  //   //   .catch(onError());
  // }, [gameId]);

  return (
    <main className="flex justify-between items-baseline gap-24 max-w-screen-2xl mx-auto px-5 py-3">
      <SidePanel />
      <GameList genre={genre} />
    </main>
  );
}

export default GenrePage;
