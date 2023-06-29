import React, { useContext } from "react";
import { ScoreContext } from "../context";

const ScoreDisplay = () => {
    const { score } = useContext(ScoreContext);

    return (
        <div className="score">
            <h2>Score</h2>
            <p>Wins: {score.wins}</p>
            <p>Losses: {score.losses}</p>
            <p>Draws: {score.draws}</p>
        </div>
    );
};

export default ScoreDisplay;
