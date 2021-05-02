import { createContext } from 'react';

// informações para exibirmos no player
type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
};

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number; // posição do episódio que está tocando
    isPlaying: boolean;
    play: (episode: Episode) => void;
    setPlayingState: (state: boolean) => void;  
    togglePlay: () => void;
}

export const PlayerContext = createContext({} as PlayerContextData);