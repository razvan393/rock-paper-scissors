import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreType } from "../types";
import "../App.css"

const LoginPage = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (localStorage.getItem("scores") === null) {
            localStorage.setItem("scores", JSON.stringify({}));
        }
        const scores: { [key: string]: ScoreType } = JSON.parse(
            localStorage.getItem("scores") || ""
        );

        if (scores && scores[name] === undefined) {
            scores[name] = { wins: 0, losses: 0, draws: 0 };
            localStorage.setItem("scores", JSON.stringify(scores));
        }

        localStorage.setItem("currentUser", name);

        navigate("/game");
    };

    return (
        <div className="login-page">
            <h2>Rock Paper Scissors</h2>
            <h3>Enter Your Name</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;
