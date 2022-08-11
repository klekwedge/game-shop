import React from 'react';

function SidePanel() {
  return (
    <section>
      <h2 className="text-2xl font-medium mb-2">Genres</h2>
      <ul className="flex flex-col gap-1 text-xl">
        <li>Action</li>
        <li>Strategy</li>
        <li>RPG</li>
        <li>Shooter</li>
        <li>Adventure</li>
        <li>Puzzle</li>
        <li>Racing</li>
        <li>Sports</li>
      </ul>
    </section>
  );
}

export default SidePanel;
