import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import {
  fetchGame,
  fetchScreenshots,
  achievementsFetched,
  achievementsFetchingError,
  achievementsReset,
  nextAchievements,
  fetchAdditions,
  fetchAchievements,
  fetchGameSeries,
  gameSeriesReset,
  additionsReset,
} from '../../slices/currentGameSlice/currentGameSlice';
import RAWG from '../../services/RAWG';
import Spinner from '../../components/Spinner/Spinner';
import AdditionsList from '../../components/AdditionsList/AdditionsList';
import AchievementsList from '../../components/AchievementsList/AchievementsList';
import GameSeries from '../../components/GameSeries/GameSeries';
import GameInfo from '../../components/GameInfo/GameInfo';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useAppSelector, useAppDispatch } from '../../hooks/useRedux';
import GameCard from '../../components/GameCard/GameCard';
import './GamePage.scss';

function GamePage() {
  const { gameId } = useParams();
  const { getGame, getGameScreenshots, getGameAchievements, getGameAdditions, getListOfGamesSeries, getData } = RAWG();

  const {
    currentGame,
    currentGameLoadingStatus,
    achievements,
    nextAchievementsPage,
    achievementsAmount,
    additions,
    gamesOfSeries,
    countGamesOfSeries,
  } = useAppSelector((state) => state.currentGame);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(achievementsReset());
    if (gameId) {
      dispatch(fetchGame(getGame(gameId)));
      dispatch(fetchScreenshots(getGameScreenshots(gameId)));
    }
  }, [gameId]);

  function loadSection(tabIndex: number) {
    if (tabIndex === 1 && achievements.length === 0 && gameId) {
      dispatch(fetchAchievements(getGameAchievements(gameId)));
    } else if (tabIndex === 2 && additions.length === 0 && gameId) {
      dispatch(additionsReset());
      dispatch(fetchAdditions(getGameAdditions(gameId)));
    } else if (tabIndex === 3 && currentGame && gameId) {
      dispatch(gameSeriesReset());
      dispatch(fetchGameSeries(getListOfGamesSeries(gameId)));
    }
  }

  function loadMoreAchievements() {
    if (nextAchievementsPage) {
      getData(nextAchievementsPage)
        .then((achievementsData) => {
          dispatch(nextAchievements(achievementsData.next));
          dispatch(achievementsFetched(achievementsData.results));
        })
        .catch(() => dispatch(achievementsFetchingError()));
    }
  }

  if (currentGameLoadingStatus === 'loading') {
    return <Spinner />;
  }

  if (currentGameLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

  return (
    <>
      <Helmet>
        <meta name="description" content={`${currentGame ? currentGame.name : 'Current Game'} - Game Shop`} />
        <title>{currentGame ? currentGame.name : 'Current Game'}- Game Shop</title>
      </Helmet>
      <main>
        {currentGame ? (
          <>
            <GameCard currentGame={currentGame} />
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
                  {nextAchievementsPage ? (
                    <AchievementsList
                      achievements={achievements}
                      achievementsAmount={achievementsAmount}
                      nextAchievementsPage={nextAchievementsPage}
                      loadMoreAchievements={() => loadMoreAchievements()}
                    />
                  ) : null}
                </TabPanel>
                <TabPanel>
                  <AdditionsList additions={additions} />
                </TabPanel>
                <TabPanel>
                  {countGamesOfSeries ? (
                    <GameSeries gamesOfSeries={gamesOfSeries} countGamesOfSeries={countGamesOfSeries} />
                  ) : null}
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
