import { useContext, useEffect, useState } from "react";
import { GameResult } from "../constants";
import { Context } from "../context";

const GameComponent = () => {
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");
    const [isGameStarted, setIsGameStarted] = useState(false);

    const { updateScore } = useContext(Context);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isGameStarted) {
            timer = setTimeout(() => {
                const computerChoice = generateComputerChoice();
                const gameResult = determineGameResult(
                    playerChoice,
                    computerChoice
                );
                setComputerChoice(computerChoice);
                setResult(gameResult);
                updateScore(gameResult);
                setIsGameStarted(false);
            }, 3000);
        }

        return () => clearTimeout(timer);
    }, [isGameStarted, playerChoice, updateScore]);

    const handlePlayerChoice = (choice: string) => {
        setPlayerChoice(choice);
        setIsGameStarted(true);
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
                <button
                    disabled={isGameStarted}
                    onClick={() => handlePlayerChoice("rock")}>
                    Rock
                </button>
                <button
                    disabled={isGameStarted}
                    onClick={() => handlePlayerChoice("paper")}>
                    Paper
                </button>
                <button
                    disabled={isGameStarted}
                    onClick={() => handlePlayerChoice("scissors")}>
                    Scissors
                </button>
            </div>
            {!isGameStarted && playerChoice && computerChoice && (
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
