import { useContext, useEffect, useState } from "react";
import { GameResult } from "../constants";
import { Context } from "../context";
import Modal, { Styles } from "react-modal";

const customModalStyles: Styles = {
    content: {
        width: "300px",
        height: "300px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
};

const GameComponent = () => {
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { updateScore, setIsLoading } = useContext(Context);

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
                setIsLoading(false);
                setIsModalOpen(true);
                setIsGameStarted(false);
            }, 3000);
        }

        return () => clearTimeout(timer);
    }, [isGameStarted, playerChoice, updateScore, setIsLoading]);

    const handlePlayerChoice = (choice: string) => {
        setPlayerChoice(choice);
        setIsGameStarted(true);
        setIsLoading(true);
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
            <h3>Choose your weapon!</h3>
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
            <Modal
                isOpen={isModalOpen}
                appElement={document.getElementById("root") as HTMLElement}
                onRequestClose={() => setIsModalOpen(false)}
                style={customModalStyles}
                contentLabel="Game Result">
                <h3>Game Result</h3>
                <p>Player's Choice: {playerChoice}</p>
                <p>Computer's Choice: {computerChoice}</p>
                <p>Result: {result}</p>
                <button onClick={() => setIsModalOpen(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default GameComponent;
