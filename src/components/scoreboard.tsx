import { useContext } from "react";
import { Context } from "../context";

const ScoreBoard = () => {
    const { allScores } = useContext(Context);

    return (
        allScores && (
            <div className="leaderboard">
                <h3>Leader Board</h3>
                {Object.keys(allScores).map((user) => {
                    return (
                        <p className="leaderboard-entry" key={user}>
                            <span>{`${user}: `}</span>
                            <span>
                                {allScores[user].wins} W{" "}
                                {allScores[user].losses} L{" "}
                                {allScores[user].draws} D
                            </span>
                        </p>
                    );
                })}
            </div>
        )
    );
};

export default ScoreBoard;
