export interface AdditionsListProps {
  additions: IAddition[];
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


