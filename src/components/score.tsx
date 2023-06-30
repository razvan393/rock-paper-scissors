import { useContext } from "react";
import { Context } from "../context";
import ScoreBoard from "./scoreboard";

const ScoreDisplay = () => {
    const { score } = useContext(Context);

    return (
        <>
            <div className="score">
                <h3>Score</h3>
                <span>Wins: {score.wins} </span>
                <span>Losses: {score.losses} </span>
                <span>Draws: {score.draws} </span>
            </div>
            <ScoreBoard />
        </>
    );
};

export default ScoreDisplay;
