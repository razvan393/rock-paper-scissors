import { GameResult } from "./constants";

export interface ContextType {
    score: { wins: number; losses: number; draws: number };
    updateScore: (result: GameResult) => void;
}
