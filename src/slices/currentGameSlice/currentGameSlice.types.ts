import { IGame } from '../../Components/pages/GamePage/GamePage.types';

export type CurrentGameState = {
  currentGame: null | IGame,
  currentGameLoadingStatus: string,
  screenshots: [],
  screenshotsLoadingStatus: string,
  trailers: [],
  trailersLoadingStatus: string,
  achievements: IAchievement[],
  achievementsLoadingStatus: string,
  nextAchievementsPage: null | string,
  achievementsAmount: number,
  additions: [],
  gamesOfSeries: [],
  gamesOfSeriesLoadingStatus: string,
  countGamesOfSeries: null | number
};


export interface IAchievementResponse {
  count: number;
  next: string;
  previous: null;
  results: IAchievement[];
}

export interface IAchievement {
  id: number;
  name: string;
  description: string;
  image: string;
  percent: string;
}