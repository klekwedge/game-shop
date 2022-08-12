import React from 'react';
import SidePanel from '../SidePanel/SidePanel';
import GameList from '../GameList/GameList';

function MainPage() {
  return (
    <main className="flex justify-between items-baseline gap-24 max-w-screen-2xl mx-auto px-5 py-3">
      <SidePanel />
      <GameList />
    </main>
  );
}

export default MainPage;
