import { createContext } from 'react';
import { ScoreContextType } from './types';

export const ScoreContext = createContext<ScoreContextType>({
    score: { wins: 0, losses: 0, draws: 0 },
    updateScore: () => {},
});
