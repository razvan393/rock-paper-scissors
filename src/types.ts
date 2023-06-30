import { GameResult } from "./constants";

export interface ScoreType {
    wins: number;
    losses: number;
    draws: number;
}

export interface ContextType {
    score: ScoreType;
    setIsLoading: (isLoading: boolean) => void;
    updateScore: (result: GameResult) => void;
}
