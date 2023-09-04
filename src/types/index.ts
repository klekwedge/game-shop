export interface ISidePanel {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    games: Game[];
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

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    domain?: string;
    language?: string;
}
export interface ShortScreenshot {
    id: number;
    image: string;
}

export interface Store {
    id: number;
    store: Genre;
}

export interface Game {
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
    metacritic: number;
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


export interface IGenre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    description: string;
}


export interface GamesAction {
    count: number;
    next: string;
    previous: null;
    results: Result[];
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    seo_h1: string;
    noindex: boolean;
    nofollow: boolean;
    description: string;
    filters: Filters;
    nofollow_collections: string[];
}

export interface Filters {
    years: FiltersYear[];
}

export interface FiltersYear {
    from: number;
    to: number;
    filter: string;
    decade: number;
    years: YearYear[];
    nofollow: boolean;
    count: number;
}

export interface YearYear {
    year: number;
    count: number;
    nofollow: boolean;
}

export interface Result {
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
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game: null;
    reviews_count: number;
    saturated_color: Color;
    dominant_color: Color;
    platforms: PlatformElement[];
    parent_platforms: ParentPlatform[];
    genres: Genre[];
    stores: Store[];
    clip: null;
    tags: Genre[];
    esrb_rating: EsrbRating;
    short_screenshots: ShortScreenshot[];
}

export enum Color {
    The0F0F0F = "0f0f0f",
}

export enum Domain {
    AppsAppleCOM = "apps.apple.com",
    EpicgamesCOM = "epicgames.com",
    GogCOM = "gog.com",
    MarketplaceXboxCOM = "marketplace.xbox.com",
    MicrosoftCOM = "microsoft.com",
    NintendoCOM = "nintendo.com",
    PlayGoogleCOM = "play.google.com",
    StorePlaystationCOM = "store.playstation.com",
    StoreSteampoweredCOM = "store.steampowered.com",
}

export interface PlatformElement {
    platform: PlatformPlatform;
    released_at: null | string;
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


export interface AchievementsListProps {
    achievements: IAchievement[];
    achievementsAmount: number;
    nextAchievementsPage: string;
    loadMoreAchievements: () => void;
}

export interface IGame {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    metacritic: number;
    metacritic_platforms: MetacriticPlatform[];
    released: string;
    tba: boolean;
    updated: string;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    reactions: { [key: string]: number };
    added: number;
    added_by_status: AddedByStatus;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: number;
    reddit_url: string;
    reddit_name: string;
    reddit_description: string;
    reddit_logo: string;
    reddit_count: number;
    twitch_count: number;
    youtube_count: number;
    reviews_text_count: number;
    ratings_count: number;
    suggestions_count: number;
    alternative_names: string[];
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    user_game: null;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    parent_platforms: ParentPlatform[];
    platforms: PlatformElement[];
    stores: Store[];
    developers: Developer[];
    genres: Developer[];
    tags: Developer[];
    publishers: Developer[];
    esrb_rating: EsrbRating;
    clip: null;
    description_raw: string;
}

export interface Developer {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    domain?: string;
    language?: string;
}

export interface MetacriticPlatform {
    metascore: number;
    url: string;
    platform: {
        platform: number;
        name: string;
        slug: string;
    };
}

export interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
}

export interface IScreenshot {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
}


export interface Platform {
    id: number;
    name: string;
    slug: string;
    image: null;
    year_end: null;
    year_start: number;
    games_count: number;
    image_background: string;
}


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

export interface IAddition {
    added: number;
    added_by_status: Record<string, unknown>;
    background_image: string;
    clip: string;
    community_rating: number;
    dominant_color: string;
    esrb_rating: Record<string, unknown>;
    genres: Record<string, unknown>
    id: number;
    metacritic: number;
    name: string;
    parent_platforms: Record<string, unknown>;
    platforms: Record<string, unknown>;
    playtime: number;
    rating: number;
    rating_top: number;
    ratings: Record<string, unknown>;
    ratings_count: number;
    released: string;
    reviews_count: number;
    reviews_text_count: number;
    saturated_color: string;
    short_screenshots: []
    slug: string
    stores: Record<string, unknown>
    suggestions_count: number;
    tags: Record<string, unknown>
    tba: boolean
    updated: string;
    user_game: string | null
}

export interface GameListProps {
    mainTitle?: string;
    descr?: string;
    genreName?: string;
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


export interface ParentPlatform {
    platform: EsrbRating;
}


export interface Requirements {
    minimum: string;
    recommended?: string;
}

export type Loading = 'idle' | 'loading' | 'error'