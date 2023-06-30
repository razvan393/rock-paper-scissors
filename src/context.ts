import { createContext } from 'react';
import { ContextType } from './types';

export const Context = createContext<ContextType>({
    score: { wins: 0, losses: 0, draws: 0 },
    allScores: {},
    isLoading: false,
    setIsLoading: () => {},
    updateScore: () => {},
});
