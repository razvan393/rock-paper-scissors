import { useEffect, useState } from "react";
import "../App.css";
import GameComponent from "../components/game";
import ScoreDisplay from "../components/score";
import { GameResult } from "../constants";
import { Context } from "../context";
import { RingLoader } from "react-spinners";
import { ScoreType } from "../types";

const Main = () => {
    const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });
    const [allScores, setAllScores] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const savedUserName = localStorage.getItem("currentUser");
        if (savedUserName) {
            setUserName(savedUserName);
            const savedScores = localStorage.getItem("scores");
            if (savedScores) {
                const scores: { [key: string]: ScoreType } =
                    JSON.parse(savedScores);
                setAllScores(scores);
                setScore(
                    scores[savedUserName] || { wins: 0, losses: 0, draws: 0 }
                );
            }
        }
    }, []);

    const updateScore = (result: GameResult) => {
        const savedScores = localStorage.getItem("scores");
        let scores: { [key: string]: ScoreType } = {};
        if (savedScores) {
            scores = JSON.parse(savedScores);
        }

        if (scores[userName] === undefined) {
            scores[userName] = { wins: 0, losses: 0, draws: 0 };
        }

        if (result === "win") {
            scores[userName].wins += 1;
        } else if (result === "loss") {
            scores[userName].losses += 1;
        } else {
            scores[userName].draws += 1;
        }

        localStorage.setItem("scores", JSON.stringify(scores));

        setScore(scores[userName] || { wins: 0, losses: 0, draws: 0 });
        setAllScores(scores);
    };
    return (
        <Context.Provider
            value={{ score, allScores, isLoading, updateScore, setIsLoading }}>
            <div className="app">
                <div className="loading-animation">
                    <RingLoader
                        size={100}
                        color="#123abc"
                        loading={isLoading}
                    />
                </div>
                <div className="main-area">
                    <GameComponent />
                </div>
                <div className="score-area">
                    <ScoreDisplay />
                </div>
            </div>
        </Context.Provider>
    );
};

export default Main;
