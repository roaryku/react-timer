import { Component } from "react";

export default class Timerinput extends Component {
    render() {
        return (<div>
           <div  /* style={{ marginLeft: 100 }} */> 
                <h3 className="Heading">Countdown Timer</h3>
                <input className="InputTime" type="number" minutes={this.props.minutes} onChange={this.props.handleChange} required />
            </div>

        </div>
        );
    }
}

