import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '@/types/games';

interface GameState {
  games: Game[];
  selectedCategory: string | null;
  sortOrder: 'asc' | 'desc';
  loading: boolean;
  error: string | null;
}

const initialState: GameState = {
  games: [],
  selectedCategory: null,
  sortOrder: 'asc',
  loading: false,
  error: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    fetchGamesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchGamesSuccess(state, action: PayloadAction<Game[]>) {
      state.games = action.payload;
      state.loading = false;
    },
    fetchGamesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload;
    },
    setSortOrder(state, action: PayloadAction<'asc' | 'desc'>) {
      state.sortOrder = action.payload;
    },
  },
});

export const { fetchGamesStart, fetchGamesSuccess, fetchGamesFailure, setSelectedCategory, setSortOrder } = gameSlice.actions;

export default gameSlice.reducer;
