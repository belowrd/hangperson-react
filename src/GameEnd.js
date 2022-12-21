import React from "react";
import "./GameEnd.css";

class GameEnd extends React.Component {
    render() {
        return (
            <>
                <div className="game-end-container">
                    <div
                        style={
                            this.props.score === 11
                                ? { display: "block" }
                                : { display: "none" }
                        }
                    >
                        <p>
                            Wow... You really spent a lot of time here. Thank
                            you, I guess?
                            <span role="img" aria-label="medal-emoji">
                                {" "}
                                🥇{" "}
                            </span>
                        </p>
                    </div>
                    <div
                        style={
                            this.props.score !== 11
                                ? { display: "block" }
                                : { display: "none" }
                        }
                    >
                        <p
                            style={{
                                margin: "18px",
                                color: "#644566",
                                fontWeight: "bold",
                            }}
                        >
                            you lost 😔
                        </p>
                        <button className="btn" onClick={this.props.startGame}>
                            play again
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default GameEnd;
