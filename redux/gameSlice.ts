import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '@/types/games';

interface GameState {
  games: Game[];
  selectedCategory: string | null;
}

const initialState: GameState = {
  games: [],
  selectedCategory: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGames(state, action: PayloadAction<Game[]>) {
      state.games = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setGames, setSelectedCategory } = gameSlice.actions;

export default gameSlice.reducer;
