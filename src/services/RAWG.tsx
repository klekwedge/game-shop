const apiKey = import.meta.env.VITE_API_KEY;

function RAWG() {
  function getGameList(genre: string | '' = '') {
    let res;
    if (genre) {
      res = `https://api.rawg.io/api/games?key=${apiKey}&genres=${genre}`;
    } else {
      res = `https://api.rawg.io/api/games?key=${apiKey}`;
    }
    return res;
  }

  function getGame(id: string) {
    return `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
  }

  function getGameAchievements(gameId: string) {
    return `https://api.rawg.io/api/games/${gameId}/achievements?key=${apiKey}`;
  }

  function getGameAdditions(gameId: string) {
    return `https://api.rawg.io/api/games/${gameId}/additions?key=${apiKey}`;
  }

  function getListOfGamesSeries(id: string) {
    return `https://api.rawg.io/api/games/${id}/game-series?key=${apiKey}`;
  }

  function getGameTrailers(id: string) {
    return `https://api.rawg.io/api/games/${id}/movies?key=${apiKey}`;
  }

  function getGameScreenshots(id: string) {
    return `https://api.rawg.io/api/games/${id}/screenshots?key=${apiKey}`;
  }

  function getGenres() {
    return `https://api.rawg.io/api/genres?key=${apiKey}`;
  }

  function getGenreDetail(genreId: string | number) {
    return `https://api.rawg.io/api/genres/${genreId}?key=${apiKey}`;
  }

  async function getData(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  return {
    getGameList,
    getGame,
    getGameAchievements,
    getGameAdditions,
    getListOfGamesSeries,
    getGameTrailers,
    getGameScreenshots,
    getGenres,
    getGenreDetail,
    getData,
  };
}

export default RAWG;
