/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Link, useParams } from 'react-router-dom';
import { FcReddit } from 'react-icons/fc';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
  SiGogdotcom,
  SiPlaystation,
  SiSteam,
  SiGoogleplay,
  SiXbox,
  SiAppstore,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
  SiNintendoswitch,
  SiPcgamingwiki,
} from 'react-icons/si';
import { MdKeyboardBackspace, MdGames } from 'react-icons/md';
import { AiFillShopping, AiOutlineQuestionCircle, AiOutlineInfoCircle } from 'react-icons/ai';

import RAWG from '../../services/RAWG';
import { screenshotsFetched, screenshotsFetchingError } from '../../slices/screenshotsSlice';

import {
  currentGameFetching,
  currentGameFetched,
  currentGameFetchingError,
  currentGameReset,
} from '../../slices/gamesSlice';

import { trailersFetched, trailersFetchingError } from '../../slices/trailersSlice';
import Spinner from '../Spinner/Spinner';

function GamePage() {
  const { gameId } = useParams();
  const rawgService = new RAWG();

  const { currentGame, currentGameLoadingStatus } = useSelector((state) => state.games);
  const { screenshots } = useSelector((state) => state.screenshots);
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentGameReset());
    dispatch(currentGameFetching());

    rawgService
      .getGame(gameId)
      .then((gameData) => dispatch(currentGameFetched(gameData)))
      .catch(() => dispatch(currentGameFetchingError()))
      .then(() => rawgService.getGameScreenshots(gameId))
      .then((screenshotsData) => dispatch(screenshotsFetched(screenshotsData)))
      .catch(() => dispatch(screenshotsFetchingError()))
      .then(() => rawgService.getGameTrailers(gameId))
      .then((trailersData) => dispatch(trailersFetched(trailersData)))
      .catch(() => dispatch(trailersFetchingError()));

    // rawgService
    //   .getGameAddOns(gameId)
    //   .then((data) => onLoaded(data))
    //   .catch(onError());
  }, [gameId]);

  if (currentGameLoadingStatus === 'loading') {
    return <Spinner />;
  }

  if (currentGameLoadingStatus === 'error') {
    return <h5 className="text-center basis-3/4">Ошибка загрузки</h5>;
  }

  function chooseStoreIcon(storeName) {
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

  function choosePlatformIcon(storeName) {
    switch (storeName) {
      case 'PlayStation 3':
        return <SiPlaystation3 size="23" />;
      case 'PlayStation 4':
        return <SiPlaystation4 size="23" />;
      case 'PlayStation 5':
        return <SiPlaystation5 size="23" />;
      case 'Xbox Series S/X':
        return <SiXbox size="23" />;
      case 'Xbox One':
        return <SiXbox size="23" />;
      case 'Nintendo Switch':
        return <SiNintendoswitch size="23" />;
      case 'PC':
        return <SiPcgamingwiki size="23" />;
      default:
        return <AiOutlineQuestionCircle size="23" />;
    }
  }

  return (
    <>
      <Helmet>
        <meta name="description" content={`${currentGame ? currentGame.name : 'Current Game'} - Game Shop`} />
        <title>
          {currentGame ? currentGame.name : 'Current Game'}
          {' '}
          - Game Shop
        </title>
      </Helmet>
      <main className="max-w-screen-2xl mx-auto px-8 py-3">
        {currentGame ? (
          <>
            {/* {console.log(currentGame)} */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl self-end ease-in duration-200 hover:text-violet-700">
                <Link to="/" className="flex gap-2 items-center">
                  <MdKeyboardBackspace size="40" />
                  Store
                </Link>
              </h2>
              <div className="self-end">
                <h1 className="text-5xl mb-2 text-right">{currentGame.name}</h1>
                <h2 className="text-xl text-right ease-in duration-200 hover:text-violet-700">
                  <Link to="series">Game series</Link>
                </h2>
              </div>
            </div>

            <div className="flex gap-10 items-center mb-20">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                allowTouchMove={false}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img src={currentGame.background_image} alt={currentGame.background_image} />
                </SwiperSlide>
                {screenshots && screenshots.results.length > 0
                  ? screenshots.results.map((screenshot) => (
                    <SwiperSlide key={screenshot.id}>
                      <img src={screenshot.image} alt={`Screenshot from ${currentGame.name}`} />
                    </SwiperSlide>
                  ))
                  : null}

                {movies && movies.results.length > 0
                  ? movies.results.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <video controls poster={movie.preview}>
                        <source src={movie.data.max} />
                      </video>
                    </SwiperSlide>
                  ))
                  : null}
              </Swiper>

              <p className="bg-zinc-800 p-10 rounded-lg max-w-xl">{currentGame.description_raw}</p>
            </div>

            <div className="flex gap-5 mb-14">
              <div className="flex flex-col bg-slate-800 p-5 rounded-lg basis-1/4">
                <AiOutlineInfoCircle className="self-center mb-3" size="40" />
                <h2 className="font-medium text-lg mb-2">Info:</h2>

                <h3>
                  Release date:
                  {` ${currentGame.released}`}
                </h3>
                <a href={`${currentGame.website}`}>Official website</a>

                <h3 className="my-2">
                  Metacritic rating:
                  {` ${currentGame.metacritic}`}
                </h3>

                <h3 className="mb-2">
                  RAWG rating:
                  {` ${currentGame.rating}`}
                </h3>
                <h3 className="mb-2">
                  Achievements count:
                  {` ${currentGame.achievements_count}`}
                </h3>

                <h3 className="mb-2">
                  Developers:
                  {` ${currentGame.developers.map((developerItem) => developerItem.name)}`}
                </h3>

                <h3 className="mb-2">
                  Publishers:
                  {` ${currentGame.publishers.map((publisherItem) => publisherItem.name)}`}
                </h3>
              </div>
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
                    href={storeItem.store.domain}
                    className="flex items-center gap-3 mb-2"
                  >
                    {/* {console.log(storeItem)} */}
                    {storeItem.store.name}
                    {chooseStoreIcon(storeItem.store.name)}
                  </a>
                ))}
              </div>
              <div className="flex flex-col bg-slate-800 p-5 rounded-lg basis-1/4">
                <MdGames className="self-center mb-3" size="40" />
                <h2 className="font-medium text-lg mb-2">Platforms:</h2>
                {currentGame.platforms.map((platformItem) => (
                  <h3 key={platformItem.platform.id} className="flex items-center gap-3 mb-2">
                    {platformItem.platform.name}
                    {choosePlatformIcon(platformItem.platform.name)}
                  </h3>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </main>
    </>
  );
}

export default GamePage;
