import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreType } from "../types";
import "../App.css";

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
            <div className="login-form">
                <h1>Welcome to the Game</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Enter your name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                    />
                    <button type="submit">Start Playing</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
