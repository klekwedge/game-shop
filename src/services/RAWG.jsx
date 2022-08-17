/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
import { Component } from 'react';

class RAWG extends Component {
  apiKey = '9c6f34d35ac04b2bbe700fdadfb26801';

  async getGameList(genre = '') {
    let res;
    if (genre) {
      res = await fetch(`https://api.rawg.io/api/games?key=${this.apiKey}&genres=${genre}`);
    } else {
      res = await fetch(`https://api.rawg.io/api/games?key=${this.apiKey}`);
    }

    const data = await res.json();
    return data;
  }

  getGame(id) {
    const res = `https://api.rawg.io/api/games/${id}?key=${this.apiKey}`;
    return res;
  }

  getGameAchievements(gameId) {
    const res = `https://api.rawg.io/api/games/${gameId}/achievements?key=${this.apiKey}`;
    return res;
  }

  async getGameAdditions(gameId) {
    const res = await fetch(`https://api.rawg.io/api/games/${gameId}/additions?key=${this.apiKey}`);
    const data = await res.json();
    return data;
  }

  getListOfGamesSeries(id) {
    const res = `https://api.rawg.io/api/games/${id}/game-series?key=${this.apiKey}`;
    return res;
  }

  async getGameTrailers(id) {
    const res = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${this.apiKey}`);
    const data = await res.json();
    return data;
  }

  getGameScreenshots(id) {
    const res = `https://api.rawg.io/api/games/${id}/screenshots?key=${this.apiKey}`;
    return res;
  }

  getGenres() {
    const res = `https://api.rawg.io/api/genres?key=${this.apiKey}`;
    return res;
  }

  getGenreDetail(genreId) {
    const res = `https://api.rawg.io/api/genres/${genreId}?key=${this.apiKey}`;
    return res;
  }

  async getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  // async getGata(url) {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   return data;
  // }
}

export default RAWG;
