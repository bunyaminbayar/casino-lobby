import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSelectedCategory } from '../../redux/gameSlice';

export const GameCategoryFilter = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games);
  const selectedCategory = useSelector((state: RootState) => state.game.selectedCategory);

  const categoryCounts = useMemo(() => {
    return games.reduce((acc, game) => {
      game.cats.forEach(cat => {
        acc[cat.title] = (acc[cat.title] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);
  }, [games]);

  const categories = Array.from(new Set(games.flatMap(game => game.cats.map(cat => cat.title))));

  return (
    <div className="mb-4">
      <button
        className={`mr-2 mb-2 px-4 py-2 rounded ${
          selectedCategory === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => dispatch(setSelectedCategory(null))}
      >
        All ({games.length})
      </button>
      
      {categories.map(category => (
        <button
          key={category}
          className={`mr-2 mb-2 px-4 py-2 text-sm rounded ${
            selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => dispatch(setSelectedCategory(category))}
        >
          {category} ({categoryCounts[category]})
        </button>
      ))}
    </div>
  );
};
