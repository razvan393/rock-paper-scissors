import { useContext, useState } from "react";
import { GameResult } from "../constants";
import { Context } from "../context";

const GameComponent = () => {
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");

    const { updateScore } = useContext(Context);

    const handlePlayerChoice = (choice: string) => {
        const computerChoice = generateComputerChoice();
        const gameResult = determineGameResult(choice, computerChoice);
        setPlayerChoice(choice);
        setComputerChoice(computerChoice);
        setResult(gameResult);
        updateScore(gameResult);
    };

    const generateComputerChoice = () => {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    const determineGameResult = (
        playerChoice: string,
        computerChoice: string
    ) => {
        if (playerChoice === computerChoice) {
            return GameResult.Draw;
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            return GameResult.Win;
        } else {
            return GameResult.Loss;
        }
    };

    return (
        <div className="game">
            <h2>Rock Paper Scissors</h2>
            <div className="choices">
                <button onClick={() => handlePlayerChoice("rock")}>Rock</button>
                <button onClick={() => handlePlayerChoice("paper")}>
                    Paper
                </button>
                <button onClick={() => handlePlayerChoice("scissors")}>
                    Scissors
                </button>
            </div>
            {playerChoice && computerChoice && (
                <div className="result">
                    <p>Player's Choice: {playerChoice}</p>
                    <p>Computer's Choice: {computerChoice}</p>
                    <p>Result: {result}</p>
                </div>
            )}
        </div>
    );
};

export default GameComponent;
