import React from 'react';
import { useParams } from 'react-router-dom';
import SidePanel from '../SidePanel/SidePanel';
import GameList from '../GameList/GameList';

function GenrePage() {
  const { genre } = useParams();
  return (
    <main className="flex justify-between items-baseline gap-24 max-w-screen-2xl mx-auto px-5 py-3">
      <SidePanel />
      <GameList genreName={genre} />
    </main>
  );
}

export default GenrePage;
