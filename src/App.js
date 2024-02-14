import React from "react";
import "./App.css";
import { Component } from "react";
import Timerinput from "./Timerinput";
import StartButton from "./StartButton";
import Timer from "./Timer";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: "00",
            minutes: "00",
        };

        this.handleChange = this.handleChange.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);
    }
    handleChange(event) {
        this.setState({
            minutes: event.target.value,
        });
    }
    tick() {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - min * 60;

        this.setState({
            minutes: min,
            seconds: sec,
        });

        if (sec < 10) {
            this.setState({
                seconds: "0" + sec,
            });
        }

        if (min < 10) {
            this.setState({
                minutes: "0" + min,
            });
        }

        if ((min === 0) & (sec === 0)) {
            clearInterval(this.intervalHandle);
        }

        this.secondsRemaining--;
    }

    startCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.minutes;
        this.secondsRemaining = time * 60;
    }

    render() {
        return (
            <div>
                <div className="ContainerTimer">
                <Timerinput className="InputTimer"
                    minutes={this.state.minutes}
                    handleChange={this.handleChange}
                />
                </div>

                <div className="ContainerTimer">
                <Timer
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    handleChange={this.handleChange}
                />
                </div>
                <div className="ContainerTimer">
                <StartButton
                    startCountDown={this.startCountDown}
                    minutes={this.state.minutes}
                />
            </div>
        </div>
        );
    }
}
