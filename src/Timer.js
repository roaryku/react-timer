import { Component } from "react";

export default class Timer extends Component {
    render() {
        return (
            <div>
                <div>
                     <h1 className="Header"/*style={{ fontSize: 100, marginLeft: 100 }} */ >
                        {this.props.minutes}:{this.props.seconds}
                    </h1>
                </div>
            </div>
        );
    }
}
