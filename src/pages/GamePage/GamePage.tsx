import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import {
  fetchGame,
  fetchScreenshots,
  fetchAdditions,
  fetchAchievements,
  fetchGameSeries,
  resetCurrentGame,
} from '../../slices/currentGameSlice/currentGameSlice';
import Spinner from '../../components/Spinner/Spinner';
import AdditionsList from '../../components/AdditionsList/AdditionsList';
import AchievementsList from '../../components/AchievementsList/AchievementsList';
import GameSeries from '../../components/GameSeries/GameSeries';
import GameInfo from '../../components/GameInfo/GameInfo';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useAppSelector, useAppDispatch } from '../../types/redux';
import GameCard from '../../components/GameCard/GameCard';
import './GamePage.scss';

function GamePage() {
  const { gameId } = useParams();

  const { currentGame, currentGameLoadingStatus, gamesOfSeries, achievements, additions } = useAppSelector(
    (state) => state.currentGame,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCurrentGame());
  }, []);

  useEffect(() => {
    if (gameId) {
      dispatch(fetchGame(gameId));
      dispatch(fetchScreenshots(gameId));
    }
  }, [gameId]);

  function loadSection(tabIndex: number) {
    if (tabIndex === 1 && achievements.length === 0 && gameId) {
      dispatch(fetchAchievements(gameId));
    } else if (tabIndex === 2 && additions.length === 0 && gameId) {
      dispatch(fetchAdditions(gameId));
    } else if (tabIndex === 3 && currentGame && gameId) {
      dispatch(fetchGameSeries(gameId));
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
                <Tab _selected={{ color: 'white', bg: 'purple.600' }}>Info </Tab>
                {currentGame.achievements_count ? (
                  <Tab _selected={{ color: 'white', bg: 'purple.600' }}>Achievements</Tab>
                ) : null}
                {currentGame.additions_count ? (
                  <Tab _selected={{ color: 'white', bg: 'purple.600' }}>Additions</Tab>
                ) : null}
                {currentGame.game_series_count ? (
                  <Tab _selected={{ color: 'white', bg: 'purple.600' }}>Game series</Tab>
                ) : null}
              </TabList>
              <TabPanels p="20px 0px 60px">
                <TabPanel>
                  <GameInfo currentGame={currentGame} />
                </TabPanel>
                {currentGame.achievements_count ? (
                  <TabPanel>
                    <AchievementsList achievementsAmount={currentGame.achievements_count} />
                  </TabPanel>
                ) : null}
                {currentGame.additions_count ? (
                  <TabPanel>
                    <AdditionsList />
                  </TabPanel>
                ) : null}
                {currentGame.game_series_count ? (
                  <TabPanel>
                    <GameSeries gamesOfSeries={gamesOfSeries} countGamesOfSeries={currentGame.game_series_count} />
                  </TabPanel>
                ) : null}
              </TabPanels>
            </Tabs>
          </>
        ) : null}
      </main>
    </>
  );
}

export default GamePage;
