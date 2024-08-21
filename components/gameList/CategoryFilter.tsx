import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSelectedCategory } from '../../redux/gameSlice';

export const CategoryFilter = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games);
  const selectedCategory = useSelector((state: RootState) => state.game.selectedCategory);

  const categories = Array.from(new Set(games.flatMap(game => game.cats.map(cat => cat.title))));

  return (
    <div className="mb-4">
      {categories.map(category => (
        <button
          key={category}
          className={`mr-2 mb-2 px-4 py-2 rounded ${
            selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => dispatch(setSelectedCategory(selectedCategory === category ? null : category))}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
