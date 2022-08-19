/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Box,
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

import {
  SiXbox,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
  SiNintendoswitch,
  SiWindows,
} from 'react-icons/si';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {
  fetchGame,
  achievementsFetched,
  achievementsFetchingError,
  achievementsReset,
  nextAchievements,
  fetchAdditions,
  fetchAchievements,
  fetchGameSeries,
  gameSeriesReset,
  additionsReset,
} from '../../slices/currentGameSlice';
import RAWG from '../../services/RAWG';

import { fetchScreenshots } from '../../slices/screenshotsSlice';

// import { trailersFetched, trailersFetchingError } from '../../slices/trailersSlice';
import Spinner from '../Spinner/Spinner';

import './GamePage.scss';
import AdditionsList from '../AdditionsList/AdditionsList';
import AchievementsList from '../AchievementsList/AchievementsList';
import GameSeries from '../GameSeries/GameSeries';
import GameInfo from '../GameInfo/GameInfo';

function GamePage() {
  const { gameId } = useParams();
  const rawgService = new RAWG();

  function choosePlatformIcon(platformName) {
    switch (platformName) {
      case 'PlayStation 3':
        return <SiPlaystation3 size="23" title={platformName} />;
      case 'PlayStation 4':
        return <SiPlaystation4 size="23" title={platformName} />;
      case 'PlayStation 5':
        return <SiPlaystation5 size="23" title={platformName} />;
      case 'Xbox Series S/X':
        return <SiXbox size="23" title={platformName} />;
      case 'Xbox One':
        return <SiXbox size="23" title={platformName} />;
      case 'Xbox 360':
        return <SiXbox size="23" title={platformName} />;
      case 'Nintendo Switch':
        return <SiNintendoswitch size="23" title={platformName} />;
      case 'PC':
        return <SiWindows size="23" title={platformName} />;
      default:
        return <AiOutlineQuestionCircle size="23" title={platformName} />;
    }
  }

  const {
    currentGame,
    currentGameLoadingStatus,
    achievements,
    nextAchievementsPage,
    achievementsAmount,
    additions,
    gamesOfSeries,
  } = useSelector((state) => state.currentGame);
  const { screenshots } = useSelector((state) => state.screenshots);
  const { movies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(achievementsReset());
    dispatch(fetchGame(rawgService.getGame(gameId)));
    dispatch(fetchScreenshots(rawgService.getGameScreenshots(gameId)));

    // rawgService
    //   .getGameTrailers(gameId)
    //   .then((trailersData) => dispatch(trailersFetched(trailersData)))
    //   .catch(() => dispatch(trailersFetchingError()));
  }, [gameId]);

  function loadSection(tabIndex) {
    if (tabIndex === 1 && achievements.length === 0) {
      dispatch(fetchAchievements(rawgService.getGameAchievements(gameId)));
    } else if (tabIndex === 2 && additions.length === 0) {
      dispatch(additionsReset());
      dispatch(fetchAdditions(rawgService.getGameAdditions(gameId)));
    } else if (tabIndex === 3 && currentGame) {
      dispatch(gameSeriesReset());
      dispatch(fetchGameSeries(rawgService.getListOfGamesSeries(gameId)));
    }
  }

  function loadMoreAchievements() {
    rawgService
      .getData(nextAchievementsPage)
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
              <Box
                alignSelf="flex-end"
                display="flex"
                gap="15px"
                flexDirection="column"
                alignItems="flex-end"
              >
                <h1 className="text-5xl mb-4 text-right">{currentGame.name}</h1>
                <Box display="inline-flex" gap="20px" alignItems="center" justifyContent="flex-end">
                  {currentGame.platforms.map((platformItem) => (
                    <h3 key={platformItem.platform.id}>
                      {choosePlatformIcon(platformItem.platform.name)}
                    </h3>
                  ))}
                </Box>
              </Box>
            </div>

            <div className="flex gap-10 items-center mb-20">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                allowTouchMove={false}
                navigation
                pagination={{ clickable: true }}
                className="GamePageSwiper"
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

            <Tabs variant="solid-rounded" onChange={(tabIndex) => loadSection(tabIndex)}>
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
                  <GameSeries gamesOfSeries={gamesOfSeries} />
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
