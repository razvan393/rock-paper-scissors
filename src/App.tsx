import { useState } from "react";
import "./App.css";
import GameComponent from "./components/game";
import ScoreDisplay from "./components/score";
import { GameResult } from "./constants";
import { Context } from "./context";

function App() {
    const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

    const updateScore = (result: GameResult) => {
        setScore((prevScore) => ({
            wins:
                result === GameResult.Win ? prevScore.wins + 1 : prevScore.wins,
            losses:
                result === GameResult.Loss
                    ? prevScore.losses + 1
                    : prevScore.losses,
            draws:
                result === GameResult.Draw
                    ? prevScore.draws + 1
                    : prevScore.draws,
        }));
    };
    return (
        <Context.Provider value={{ score, updateScore }}>
            <div className="app">
                <header className="app-header"></header>
                <div className="main-area"><GameComponent/></div>
                <div className="score-area">
                    <ScoreDisplay />
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
