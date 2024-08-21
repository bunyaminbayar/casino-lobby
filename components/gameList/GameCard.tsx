import React from 'react';
import { Game } from '@/types/games';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img 
        src={game.icon_2} 
        alt={game.name} 
        className="w-full h-32 object-cover mb-2" 
      />
      <h2 className="text-xl font-semibold">{game.name}</h2>
    </div>
  );
};
