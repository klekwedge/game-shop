/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
import { Component } from 'react';

class RAWG extends Component {
  apiKey = '9c6f34d35ac04b2bbe700fdadfb26801';

  getGameList(genre = '') {
    let res;
    if (genre) {
      res = `https://api.rawg.io/api/games?key=${this.apiKey}&genres=${genre}`;
    } else {
      res = `https://api.rawg.io/api/games?key=${this.apiKey}`;
    }
    return res;
  }

  getGame(id: string) {
    const res = `https://api.rawg.io/api/games/${id}?key=${this.apiKey}`;
    return res;
  }

  getGameAchievements(gameId: string) {
    const res = `https://api.rawg.io/api/games/${gameId}/achievements?key=${this.apiKey}`;
    return res;
  }

  getGameAdditions(gameId: string) {
    return `https://api.rawg.io/api/games/${gameId}/additions?key=${this.apiKey}`;
  }

  getListOfGamesSeries(id: string) {
    const res = `https://api.rawg.io/api/games/${id}/game-series?key=${this.apiKey}`;
    return res;
  }

  async getGameTrailers(id: string) {
    const res = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${this.apiKey}`);
    const data = await res.json();
    return data;
  }

  getGameScreenshots(id: string) {
    const res = `https://api.rawg.io/api/games/${id}/screenshots?key=${this.apiKey}`;
    return res;
  }

  getGenres() {
    const res = `https://api.rawg.io/api/genres?key=${this.apiKey}`;
    return res;
  }

  getGenreDetail(genreId: string) {
    const res = `https://api.rawg.io/api/genres/${genreId}?key=${this.apiKey}`;
    return res;
  }

  async getData(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  // https://api.rawg.io/api/games?key=9c6f34d35ac04b2bbe700fdadfb26801&search=witcher-3
}

export default RAWG;
