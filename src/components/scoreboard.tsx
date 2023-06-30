import { useContext } from "react";
import { Context } from "../context";

const ScoreBoard = () => {
    const { allScores } = useContext(Context);

    return (
        allScores && (
            <div className="leaderboard">
                <h2>Leader Board</h2>
                {Object.keys(allScores).map((user) => {
                    return (
                        <div className="leaderboard-entry">
                            <span>{`${user}: `}</span>
                            <span>
                                {allScores[user].wins} W{" "}
                                {allScores[user].losses} L{" "}
                                {allScores[user].draws} D
                            </span>
                        </div>
                    );
                })}
            </div>
        )
    );
};

export default ScoreBoard;
