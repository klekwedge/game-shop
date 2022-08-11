import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';
import { FcReddit } from 'react-icons/fc';
import {
  SiGogdotcom,
  SiPlaystation,
  SiSteam,
  SiGoogleplay,
  SiXbox,
  SiAppstore,
} from 'react-icons/si';
import { AiFillShopping, AiOutlineQuestionCircle } from 'react-icons/ai';

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

  function chooseStoreIcon(storeName) {
    console.log(storeName);
    switch (storeName) {
      case 'GOG':
        return <SiGogdotcom size="23" />;
      case 'PlayStation Store':
        return <SiPlaystation size="23" />;
      case 'Steam':
        return <SiSteam size="23" />;
      case 'Google Play':
        return <SiGoogleplay size="23" />;
      case 'Xbox Store':
        return <SiXbox size="23" />;
      case 'Xbox 360 Store':
        return <SiXbox size="23" />;
      case 'App Store':
        return <SiAppstore size="23" />;
      default:
        return <AiOutlineQuestionCircle size="23" />;
    }
  }

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
          <h2>{currentGame.released}</h2>
          <div className="flex gap-5">
            <div className="flex flex-col bg-slate-800 p-5 rounded-lg basis-1/4">
              <FcReddit className="self-center mb-3" size="40" />
              <a href={`${currentGame.reddit_url}`} className="font-medium text-lg mb-2">
                {currentGame.reddit_name}
              </a>
              <p>{currentGame.reddit_description}</p>
            </div>
            <div className="flex flex-col bg-slate-800 p-5 rounded-lg basis-1/4">
              <AiFillShopping className="self-center mb-3" size="40" />
              <h2 className="font-medium text-lg mb-2">The shops:</h2>
              {currentGame.stores.map((storeItem) => (
                <a
                  key={storeItem.store.id}
                  href={`${storeItem.store.domain}`}
                  className="flex items-center gap-3 mb-2"
                >
                  {storeItem.store.name}
                  {chooseStoreIcon(storeItem.store.name)}
                </a>
              ))}
            </div>
            <div className="flex flex-col bg-slate-800 p-5 rounded-lg basis-1/4">
              <FcReddit className="self-center mb-3" size="40" />
              <a href={`${currentGame.reddit_url}`}>{currentGame.reddit_name}</a>
              <p>{currentGame.reddit_description}</p>
            </div>
            <div className="flex flex-col bg-slate-800 p-5 rounded-lg basis-1/4">
              <FcReddit className="self-center mb-3" size="40" />
              <a href={`${currentGame.reddit_url}`}>{currentGame.reddit_name}</a>
              <p>{currentGame.reddit_description}</p>
            </div>
          </div>
        </>
      ) : null}
    </main>
  );
}

export default GamePage;
