// creating an array and passing the number, questions, options, and answers
import React, { Component } from "react";
import "./Quiz.css";

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    questionTitle: "The type of trading member who takes position every day and also liquidate it on the same day is classified as?",
                    questionOptions: [
                        { answer: "Day traders", isCorrect: true },
                        { answer: "Broker traders", isCorrect: false },
                        { answer: "Non-position traders", isCorrect: false },
                        { answer: "Commerical traders", isCorrect: false },
                    ],
                },
                {
                    questionTitle: "Which order type allows you to buy or sell a stock immediately at the best avilable price?",
                    questionOptions: [
                        { answer: "Limit order", isCorrect: false },
                        { answer: "Market order", isCorrect: true },
                        { answer: "Stop order", isCorrect: false },
                        { answer: "Day order", isCorrect: false },
                    ],
                },
                {
                    questionTitle: "Which financial statement provides information about a company's revenues and expenses over aspecific period?",
                    questionOptions: [
                        { answer: "Balance sheet", isCorrect: false },
                        { answer: "Income statement", isCorrect: true },
                        { answer: "Cash flow statement", isCorrect: false },
                        { answer: "Statement of retained earnings", isCorrect: false },
                    ],
                },
                {
                    questionTitle: "What term refers to the pratice of buying and selling the same stock multiple times in a single trading day?",
                    questionOptions: [
                        { answer: "Swing trading", isCorrect: false },
                        { answer: "Long-term investing", isCorrect: false },
                        { answer: "Day trading", isCorrect: true },
                        { answer: "Value investing", isCorrect: false },
                    ],
                },
            ],
            score: 0,
            currentQuestion: 0,
            finalScores: false,
        };
    }

    clickHandler(isCrr) {
        isCrr &&
            this.setState((prevState) => {
                return {
                    score: prevState.score + 1,
                };
            });

        if (this.state.currentQuestion < this.state.questions.length - 1) {
            this.setState((prevState) => {
                return { currentQuestion: prevState.currentQuestion + 1 };
            });
        } else {
            this.setState({ finalScores: true });
        }
    }

    render() {
        return (
            <div className="quiz">
                {this.state.finalScores ? (
                    <div className="quiz__result-wrapper">
                        <h1 className="quiz__result">
                            You scored {this.state.score} out of {this.state.questions.length}
                        </h1>
                    </div>
                ) : (
                    <>
                        <div className="quiz_left">
                            <h1 className="quiz__question-title">
                                Question {this.state.currentQuestion + 1}/
                                <span>{this.state.questions.length}</span>
                            </h1>
                            <h3 className="quiz__question">
                                {this.state.questions[this.state.currentQuestion].questionTitle}
                            </h3>
                        </div>
                        <div className="quiz_right">
                            <ul className="quiz__list">
                                {this.state.questions[
                                    this.state.currentQuestion
                                ].questionOptions.map((answer) => (
                                    <li
                                        className="quiz__item"
                                        onClick={this.clickHandler.bind(this, answer.isCorrect)}
                                    >
                                        {answer.answer}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        );
    }
}
