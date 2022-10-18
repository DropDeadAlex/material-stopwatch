import React from "react";
import TimerButton from './components/TimerButton.jsx'
import TimeDisplay from './components/TimeDisplay.jsx'

export default class App2 extends React.Component {
  state = {
    nome: "",
    tempo: 0,
    contador: () => {},
    botoes: {
      playNpause: {
        label: "Iniciar",
        action: () => {},
        style: ""
      },
      reset: {
        label: "Zerar",
        action: () => {},
        style: ""
      },
      lap: {
        label: "Volta",
        action: () => {},
        style: ""
      }
    },
    labels: {
      initial: "inicial",
      paused:  "pausado",
      running: "rodando"
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
    this.setState({ nome: this.state.labels[state] }, this.behave[state]())
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
            label: "restart_alt",
            action: undefined,
            style: "hide"
          },
          lap: {
            label: "timer",
            action: undefined,
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
            label: "restart_alt",
            action: () => this.changeState("initial")
          },
          lap: {
            label: "timer",
            action: undefined
          }
        }  
      })
    },

    paused: () => {
      this.stop()

      this.setState({ 
        botoes: {
          playNpause: {
            label: "play_arrow",
            action: () => this.changeState("running")
          },
          reset: {
            label: "restart_alt",
            action: () => this.changeState("initial")
          },
          lap: {
            label: "timer",
            action: undefined,
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
        <TimeDisplay time={tempo}/>
        
        <section id="buttons">
          <TimerButton props={reset}/>
          <TimerButton props={playNpause}/>
          <TimerButton props={lap}/>
          {/* brek sandbox with commit */}
        </section>
      </main>  
      </>
    )
  };

  componentDidMount = () => {
    this.changeState("initial")
  };
}