import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGames } from '../redux/gameSlice';
import { RootState } from '../redux/store';
import { Game } from '@/types/games';
import { Layout } from '@/components/gameList/Layout';

interface HomeProps {
  initialGames: Game[];
}

export default function Home({ initialGames }: HomeProps) {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games);
  const selectedCategory = useSelector((state: RootState) => state.game.selectedCategory);

  useEffect(() => {
    dispatch(setGames(initialGames));
  }, [dispatch, initialGames]);

  const filteredGames = games.filter(game =>
    (selectedCategory ? game.cats.some(cat => cat.title === selectedCategory) : true)
  );

  return (
    <main className='container mx-auto p-4'>
      <h1 className="text-2xl font-bold mb-2 mt-2">Casino Lobby</h1>
        <Layout games={filteredGames} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/games');
  const initialGames: Game[] = await res.json();

  return { props: { initialGames } };
};
