import { Component } from "react";
import { TimerButtons } from './components/TimerButtons'
import { TimeDisplay } from './components/TimeDisplay'

class StopWatch extends Component {
  state = {
    name: "",
    time: 0,
    counter: () => { },
    botoes: {
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
        botoes: {
          playNpause: {
            label: "play_arrow",
            action: () => this.changeState("running")
          },
          reset: {
            ...this.state.botoes.reset,
            action: () => this.changeState("initial"),
            style: "hide"
          },
          lap: {
            ...this.state.botoes.lap,
            style: "hide"
          }
        }
      })
    },

    running: () => {
      this.start()

      this.setState({
        botoes: {
          playNpause: {
            label: "pause",
            action: () => this.changeState("paused"),
            style: "square"
          },
          reset: {
            ...this.state.botoes.reset,
            style: undefined
          },
          lap: {
            ...this.state.botoes.lap,
            style: undefined
          }
        }
      })
    },

    paused: () => {
      this.stop()

      this.setState({
        botoes: {
          ...this.state.botoes,
          playNpause: {
            label: "play_arrow",
            action: () => this.changeState("running")
          },
          lap: {
            ...this.state.botoes.lap,
            style: "hide"
          }
        }
      })
    }
  };

  render = () => {
    const { time, botoes } = this.state;

    return (
      <>
        <main>
          <TimeDisplay>{time}</TimeDisplay>
          <TimerButtons>{botoes}</TimerButtons>
        </main>
      </>
    )
  };

  componentDidMount = () => {
    this.changeState("initial")
  };
}

export { StopWatch };