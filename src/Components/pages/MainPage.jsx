import React from 'react';
import SidePanel from '../SidePanel/SidePanel';
import GameList from '../GameList/GameList';

function MainPage() {
  return (
    <main className="flex justify-between items-baseline gap-24">
      <SidePanel />
      <GameList />
    </main>
  );
}

export default MainPage;
