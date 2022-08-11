import React, { useEffect } from 'react';
import RAWG from '../../services/RAWG';
import SidePanel from '../SidePanel/SidePanel';
import GameList from '../GameList/SidePanel';

function Main() {
  const rawgService = new RAWG();

  function onLoaded(data) {
    console.log(data);
  }

  function onError(e) {
    console.log(e);
  }

  useEffect(() => {
    rawgService.getGame().then(onLoaded).catch(onError);
  }, []);

  return (
    <main className="flex justify-between">
      <SidePanel />
      <GameList />
    </main>
  );
}

export default Main;
