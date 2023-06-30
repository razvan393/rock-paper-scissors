import { GameResult } from "./constants";

export interface ContextType {
    score: { wins: number; losses: number; draws: number };
    setIsLoading: (isLoading: boolean) => void;
    updateScore: (result: GameResult) => void;
}
