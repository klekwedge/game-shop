export interface GameSeriesProps {
  gamesOfSeries: IGameSeries[];
  countGamesOfSeries: number;
}

export interface IGameSeries {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number | null;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: PlatformElement[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip: null;
  tags: Genre[];
  esrb_rating: EsrbRating;
  short_screenshots: ShortScreenshot[];
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}


export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  domain?: string;
  language?: string;
}

export interface ParentPlatform {
  platform: EsrbRating;
}

export interface PlatformElement {
  platform: PlatformPlatform;
  released_at: string;
  requirements_en: Requirements | null;
  requirements_ru: Requirements | null;
}

export interface PlatformPlatform {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}

export interface Requirements {
  minimum: string;
  recommended?: string;
}

export interface Rating {
  id: number;
  title: Title;
  count: number;
  percent: number;
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface Store {
  id: number;
  store: Genre;
}
