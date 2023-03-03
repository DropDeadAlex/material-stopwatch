import { Component } from "react";
import { TimerButtons } from './components/TimerButtons'
import { TimeDisplay } from './components/TimeDisplay'

class StopWatch extends Component {
  state = {
    name: "",
    time: 0,
    counter: () => { },
    buttons: {
      playNpause: {
        label: "play_arrow",
        action: () => { },
        style: undefined
      },
      reset: {
        label: "restart_alt",
        action: () => { },
        style: undefined
      },
      lap: {
        label: "timer",
        action: () => { },
        style: undefined
      }
    },
    labels: {
      initial:  "inicial",
      paused:   "pausado",
      running:  "rodando"
    }
  };

  start = () => {
    this.setState({
      counter: setInterval(() => {
        this.setState({ time: this.state.time + .01 })
      }, 10)
    })
  };

  stop = () => {
    clearInterval(this.state.counter)
    this.setState({ counter: undefined })
  };

  zerar = () => {
    this.stop()
    this.setState({ time: 0 })
  };

  changeState = (state) => {
    this.setState({ name: this.state.labels[state] }, this.behave[state])
  };

  behave = {
    initial: () => {
      this.zerar()

      this.setState({
        buttons: {
          playNpause: {
            label: "play_arrow",
            action: () => this.changeState("running")
          },
          reset: {
            ...this.state.buttons.reset,
            action: () => this.changeState("initial"),
            style: "hide"
          },
          lap: {
            ...this.state.buttons.lap,
            style: "hide"
          }
        }
      })
    },

    running: () => {
      this.start()

      this.setState({
        buttons: {
          playNpause: {
            label: "pause",
            action: () => this.changeState("paused"),
            style: "square"
          },
          reset: {
            ...this.state.buttons.reset,
            style: undefined
          },
          lap: {
            ...this.state.buttons.lap,
            style: undefined
          }
        }
      })
    },

    paused: () => {
      this.stop()

      this.setState({
        buttons: {
          ...this.state.buttons,
          playNpause: {
            label: "play_arrow",
            action: () => this.changeState("running")
          },
          lap: {
            ...this.state.buttons.lap,
            style: "hide"
          }
        }
      })
    }
  };

  render = () => {
    const { time, buttons } = this.state;

    return (
      <>
        <main>
          <TimeDisplay>{time}</TimeDisplay>
          <TimerButtons>{buttons}</TimerButtons>
        </main>
      </>
    )
  };

  componentDidMount = () => {
    this.changeState("initial")
  };
}

export { StopWatch };