import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.handle = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    this.handle.clearInterval();
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    return (
      <div>
        <h1>Clock</h1>
        <p>{`${hours}::${minutes}::${seconds}`}</p>
      </div>
    )
  }
}

module.exports = Clock;
