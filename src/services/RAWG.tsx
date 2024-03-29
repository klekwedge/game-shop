/* eslint-disable @typescript-eslint/no-explicit-any */
const apiKey = import.meta.env.VITE_API_KEY;

class RAWGService {
  private apiKey: string;

  private baseUrl: string;

  constructor(key: string) {
    this.apiKey = key;
    this.baseUrl = 'https://api.rawg.io/api';
  }

  async get(endpoint: string, params: Record<string, any> = {}): Promise<any> {
    const url = new URL(`${this.baseUrl}/${endpoint}`);
    url.searchParams.set('key', this.apiKey);
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
    try {
      const res = await fetch(url.toString());
      if (!res.ok) {
        throw new Error(`Failed to fetch data (status ${res.status})`);
      }
      return await res.json();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }

  async getGameList(genre: string | undefined): Promise<any> {
    const params = genre ? { genres: genre } : {};
    return this.get('games', params);
  }

  async getGame(id: string): Promise<any> {
    return this.get(`games/${id}`);
  }

  async getGameAchievements(gameId: string): Promise<any> {
    return this.get(`games/${gameId}/achievements`);
  }

  async getGameAdditions(gameId: string): Promise<any> {
    return this.get(`games/${gameId}/additions`);
  }

  async getListOfGamesSeries(id: string): Promise<any> {
    return this.get(`games/${id}/game-series`);
  }

  async getGameScreenshots(id: string): Promise<any> {
    return this.get(`games/${id}/screenshots`);
  }

  async getGenres(): Promise<any> {
    return this.get('genres');
  }

  async getGenreDetail(genreId: string | number): Promise<any> {
    return this.get(`genres/${genreId}`);
  }
}

const rawgService = new RAWGService(apiKey);
export default rawgService;
