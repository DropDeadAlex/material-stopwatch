import { Component } from "react";
import { TimerButton } from './components/TimerButton'
import { TimeDisplay } from './components/TimeDisplay'

class StopWatch extends Component {
  state = {
    nome: "",
    tempo: 0,
    contador: () => { },
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
      contador: setInterval(() => {
        this.setState({ tempo: this.state.tempo + .01 })
      }, 10)
    })
  };

  stop = () => {
    clearInterval(this.state.contador)
    this.setState({ contador: undefined })
  };

  zerar = () => {
    this.stop()
    this.setState({ tempo: 0 })
  };

  changeState = (state) => {
    this.setState({ nome: this.state.labels[state] }, this.behave[state])
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
    const {
      tempo,
      botoes: { reset, playNpause, lap }
    } = this.state;

    return (
      <>
      <main>
        <TimeDisplay>{tempo}</TimeDisplay>

        <section id="buttons">
          <TimerButton>{reset}</TimerButton>
          <TimerButton>{playNpause}</TimerButton>
          <TimerButton>{lap}</TimerButton>
        </section>
      </main>
      </>
    )
  };

  componentDidMount = () => {
    this.changeState("initial")
  };
}

export { StopWatch };