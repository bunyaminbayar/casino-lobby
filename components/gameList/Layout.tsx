import { ReactNode, useState } from 'react';
import { CategoryFilter } from './GameCategoryFilter';
import { GameCard } from './GameCard';
import { Game } from '@/types/games';
import { GameNameFilter } from './GameNameFilter';

interface LayoutProps {
    games: Game[];
}

export const Layout: React.FC<LayoutProps> = ({ games }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-4">
        <GameNameFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    );
};
