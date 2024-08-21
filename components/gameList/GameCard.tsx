import React from 'react';
import { Game } from '@/types/games';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  // Default image
  const defaultImage = '/images/default-img.jpg';

  return (
    <div className="border p-4 rounded shadow">
      <img
        src={game.icon_2 || defaultImage}
        alt={game.name || 'Game image'}
        className="w-full h-32 object-cover mb-2"
        onError={(e) => {
          // if game hasn't image use default
          (e.target as HTMLImageElement).src = defaultImage;
        }}
      />
      <h2 className="text-xl font-semibold">{game.name || 'Game Name'}</h2>
    </div>
  );
};
