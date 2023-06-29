import { GameResult } from "./constants";

export interface ScoreContextType {
    score: { wins: number; losses: number; draws: number };
    updateScore: (result: GameResult) => void;
}
