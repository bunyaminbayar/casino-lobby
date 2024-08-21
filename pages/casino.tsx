import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Game } from '@/types/games';
import { GameLayout } from '@/components/gameList/GameLayout';
import { fetchGamesStart, fetchGamesSuccess, fetchGamesFailure } from '../redux/gameSlice';

interface HomeProps {
  initialGames: Game[];
  error?: string;
}

export default function Home({ initialGames, error }: HomeProps) {
  const dispatch = useDispatch();
  const { games, selectedCategory, loading } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    if (error) {
      dispatch(fetchGamesFailure(error));
    } else {
      dispatch(fetchGamesStart());
      dispatch(fetchGamesSuccess(initialGames));
    }
  }, [dispatch, initialGames, error]);

  const filteredGames = games.filter(game =>
    selectedCategory ? game.cats.some(cat => cat.title === selectedCategory) : true
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2 mt-2">Casino Lobby</h1>
      <GameLayout games={filteredGames} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/games');
      if (!res.ok) {
        throw new Error(`Failed to fetch games. Status: ${res.status}`);
      }
  
      const initialGames: Game[] = await res.json();
      return { props: { initialGames } };
    } catch (error) {
      let errorMessage: string;
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = 'An unknown error occurred';
      }
  
      return { props: { initialGames: [], error: errorMessage } };
    }
  };
