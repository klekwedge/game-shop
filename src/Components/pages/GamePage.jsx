/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { MdKeyboardBackspace } from 'react-icons/md';

import RAWG from '../../services/RAWG';
import { screenshotsFetched, screenshotsFetchingError } from '../../slices/screenshotsSlice';

import {
  currentGameFetching,
  currentGameFetched,
  currentGameFetchingError,
  currentGameReset,
  achievementsFetched,
  achievementsFetchingError,
  achievementsReset,
  nextAchievements,
  getAchievementsAmount,
  additionsFetching,
  additionsFetched,
  additionsFetchingError,
} from '../../slices/currentGameSlice';

import { trailersFetched, trailersFetchingError } from '../../slices/trailersSlice';
import Spinner from '../Spinner/Spinner';

import './GamePage.scss';
import AdditionsList from '../AdditionsList/AdditionsList';
import AchievementsList from '../AchievementsList/AchievementsList';
import GameSeries from '../GameSeries/GameSeries';
import GameInfo from '../GameInfo/GameInfo';

function GamePage() {
  const { gameId } = useParams();
  const rawgService = new RAWG();

  const {
    currentGame,
    currentGameLoadingStatus,
    achievements,
    nextAchievementsPage,
    achievementsAmount,
    additions,
  } = useSelector((state) => state.currentGame);
  const { screenshots } = useSelector((state) => state.screenshots);
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentGameReset());
    dispatch(currentGameFetching());
    dispatch(achievementsReset());

    rawgService
      .getGame(gameId)
      .then((gameData) => dispatch(currentGameFetched(gameData)))
      .catch(() => dispatch(currentGameFetchingError()))
      ///
      .then(() => rawgService.getGameScreenshots(gameId))
      .then((screenshotsData) => dispatch(screenshotsFetched(screenshotsData)))
      .catch(() => dispatch(screenshotsFetchingError()));
    ///
    // .then(() => rawgService.getGameTrailers(gameId))
    // .then((trailersData) => dispatch(trailersFetched(trailersData)))
    // .catch(() => dispatch(trailersFetchingError()));
    //

    // rawgService
    //   .getGameAddOns(gameId)
    //   .then((data) => onLoaded(data))
    //   .catch(onError());
  }, [gameId]);

  function loadStartAchievements(tabIndex) {
    if (tabIndex === 1 && achievements.length === 0) {
      rawgService
        .getGameAchievements(gameId)
        .then((achievementsData) => {
          dispatch(achievementsFetched(achievementsData.results));
          dispatch(nextAchievements(achievementsData.next));
          dispatch(getAchievementsAmount(achievementsData.count));
        })
        .catch(() => dispatch(achievementsFetchingError()));
    } else if (tabIndex === 2 && additions.length === 0) {
      rawgService
        .getGameAdditions(gameId)
        .then((additionsData) => {
          dispatch(additionsFetched(additionsData.results));
        })
        .catch(() => dispatch(achievementsFetchingError()));
    }
  }

  function loadMoreAchievements() {
    rawgService
      .getGada(nextAchievementsPage)
      .then((achievementsData) => {
        dispatch(nextAchievements(achievementsData.next));
        dispatch(achievementsFetched(achievementsData.results));
      })
      .catch(() => dispatch(achievementsFetchingError()));
  }

  if (currentGameLoadingStatus === 'loading') {
    return <Spinner />;
  }

  if (currentGameLoadingStatus === 'error') {
    return <h5 className="text-center basis-3/4">Ошибка загрузки</h5>;
  }

  console.log('render');

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={`${currentGame ? currentGame.name : 'Current Game'} - Game Shop`}
        />
        <title>
          {currentGame ? currentGame.name : 'Current Game'}
          {' '}
          - Game Shop
        </title>
      </Helmet>
      <main className="max-w-screen-2xl mx-auto px-20 pt-3 pb-8">
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
                  Game series
                </h2>
              </div>
            </div>

            <div className="flex gap-10 items-center mb-20">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                allowTouchMove={false}
                navigation
                pagination={{ clickable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
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

            <Tabs variant="solid-rounded" onChange={(tabIndex) => loadStartAchievements(tabIndex)}>
              <TabList>
                <Tab _selected={{ color: 'white', bg: 'purple.600' }}>Game Info </Tab>
                <Tab _selected={{ color: 'white', bg: 'purple.600' }}>Achievements</Tab>
                <Tab _selected={{ color: 'white', bg: 'purple.600' }}>Additions</Tab>
                <Tab _selected={{ color: 'white', bg: 'purple.600' }}>Game series</Tab>
              </TabList>
              <TabPanels p="20px 0px 60px">
                <TabPanel>
                  <GameInfo currentGame={currentGame} />
                </TabPanel>
                <TabPanel>
                  <AchievementsList
                    achievements={achievements}
                    achievementsAmount={achievementsAmount}
                    nextAchievementsPage={nextAchievementsPage}
                    loadMoreAchievements={loadMoreAchievements}
                  />
                </TabPanel>
                <TabPanel>
                  <AdditionsList additions={additions} />
                </TabPanel>
                <TabPanel>
                  <GameSeries />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        ) : null}
      </main>
    </>
  );
}

export default GamePage;
