import React from 'react';

function SidePanel() {
  return (
    <section>
      <h2 className="text-2xl font-medium mb-2">Genres</h2>
      <ul className="flex flex-col gap-1 text-xl">
        <li className="cursor-pointer">Action</li>
        <li className="cursor-pointer">Strategy</li>
        <li className="cursor-pointer">RPG</li>
        <li className="cursor-pointer">Shooter</li>
        <li className="cursor-pointer">Adventure</li>
        <li className="cursor-pointer">Puzzle</li>
        <li className="cursor-pointer">Racing</li>
        <li className="cursor-pointer">Sports</li>
      </ul>
    </section>
  );
}

export default SidePanel;
