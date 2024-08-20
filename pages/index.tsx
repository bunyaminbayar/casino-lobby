import { GetServerSideProps } from 'next';
import { Game } from '@/types/games';
import { useState } from 'react';

interface HomeProps {
  games: Game[];
}

export default function Home({ games }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Casino Lobby</h1>
      <input
        type="text"
        placeholder="Search for a game..."
        className="border p-2 mb-4 w-full"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredGames.map(game => (
          <div key={game.id} className="border p-4 rounded shadow">
            <img 
              src={game.icon_2} 
              alt={game.name} 
              className="w-full h-32 object-cover mb-2" 
            />
            <h2 className="text-xl font-semibold">{game.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch('http://localhost:3000/api/games');  // Veya uygun bir API URL'si
  const games: Game[] = await res.json();

  return {
    props: {
      games,
    },
  };
}
