import { useState } from 'react';
import { GameCategoryFilter } from './GameCategoryFilter';
import { GameCard } from './GameCard';
import { Game } from '@/types/games';
import { GameNameFilter } from './GameNameFilter';
import { GameSorter } from './GameSorter';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface LayoutProps {
    games: Game[];
}

export const GameLayout: React.FC<LayoutProps> = ({ games }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const sortOrder = useSelector((state: RootState) => state.game.sortOrder);

    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedGames = filteredGames.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    return (
        <div className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="0">
                    <GameNameFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <div className="">
                    <GameSorter />
                </div>
            </div>
            <GameCategoryFilter />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedGames.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};

