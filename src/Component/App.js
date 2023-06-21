import React from 'react';

import Stopwatch from './Stopwatch';
import Countdown from './Countdown';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      stopwatch: false,
      countdown: false,
    };
  }
  close = (key) => {
    this.setState({ [key]: false });
  };

  render() {
    return (
      <div>
        <div className="App-title">🕓Timers🕓</div>
        <div className="Timers">
          {this.state.stopwatch ? (
            <Stopwatch close={this.close} />
          ) : (
            <button onClick={() => this.setState({ stopwatch: true })}>
              Show Stopwatch
            </button>
          )}
          {this.state.countdown ? (
            <Countdown close={this.close} />
          ) : (
            <button onClick={() => this.setState({ countdown: true })}>
              Show Countdown
            </button>
          )}
        </div>
      </div>
    );
  }
}
export default App;
