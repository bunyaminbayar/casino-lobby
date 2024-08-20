// src/types/index.ts
export interface Game {
    id: string;
    categories: string[];
    features: any[];
    themes: any[];
    icons: any[];
    backgrounds: any[];
    server_game_id: string;
    extearnal_game_id: string;
    front_game_id: string;
    name: string;
    ratio: string;
    status: string;
    provider: string;
    show_as_provider: string;
    provider_title: string;
    icon_2: string;
    background: string;
    types: {
      realMode: number;
      funMode: number;
    };
    game_skin_id: string;
    cats: {
      id: string;
      title: string;
      type: string;
    }[];
    feats: any[];
    thms: any[];
    active: string;
  }
  