import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Game } from '@/types/games';
import { GameLayout } from '@/components/gameList/GameLayout';
import { fetchGamesStart, fetchGamesSuccess, fetchGamesFailure } from '../redux/gameSlice';

interface HomeProps {
  initialGames: Game[];
}

export default function Casino({ initialGames }: HomeProps) {
  const dispatch = useDispatch();
  const { games, selectedCategory, loading, error } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(fetchGamesStart());
    try {
      dispatch(fetchGamesSuccess(initialGames));
    } catch (err) {
      dispatch(fetchGamesFailure('Error !'));
    }
  }, [dispatch, initialGames]);

  const filteredGames = games.filter(game =>
    selectedCategory ? game.cats.some(cat => cat.title === selectedCategory) : true
  );

  if (loading) {
    return <div>Games Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className='container mx-auto p-4'>
      <h1 className="text-2xl font-bold mb-2 mt-2">Casino Lobby</h1>
      <GameLayout games={filteredGames} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/games');
    const initialGames: Game[] = await res.json();

    return { props: { initialGames } };
  } catch (error) {
    return { props: { initialGames: [] } };
  }
};


