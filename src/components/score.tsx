import { useContext } from "react";
import { Context } from "../context";
import ScoreBoard from "./scoreboard";

const ScoreDisplay = () => {
    const { score } = useContext(Context);

    return (
        <>
            <div className="score">
                <h2>Score</h2>
                <p>Wins: {score.wins}</p>
                <p>Losses: {score.losses}</p>
                <p>Draws: {score.draws}</p>
            </div>
            <ScoreBoard />
        </>
    );
};

export default ScoreDisplay;
