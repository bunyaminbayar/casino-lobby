import React from 'react';
import { Game } from '@/types/games';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="border border-slate-500 rounded">
      <img 
        src={game.icon_2} 
        alt={game.name} 
        className="w-full object-cover rounded-t-sm" 
      />
      <h2 className="text-sm sm:text-lg font-semibold text-center p-4">{game.name}</h2>
    </div>
  );
};
