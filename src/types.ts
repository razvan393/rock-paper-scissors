import { GameResult } from "./constants";

export interface ScoreType {
    wins: number;
    losses: number;
    draws: number;
}

export interface ContextType {
    score: ScoreType;
    allScores: {[key: string]: ScoreType};
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    updateScore: (result: GameResult) => void;
}
