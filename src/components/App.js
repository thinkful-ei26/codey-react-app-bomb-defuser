import React from 'react';
import '../css/App.css';

import Timer from './Timer';
import Procedure from './Procedure';
import Button from './Button';
import Clicks from './Clicks';

const startTime = 6;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'blue', 'yellow', 'green', 'orange', 'purple', ],
      procedure: [1, 2, 3, 4],
      clicks: [],
      currentTime: startTime
    }
    this.incrementer = '';
  }

  handleStartClick() {
    const newProcedure = this.state.procedure.map(color => {
      return(color = this.state.colors[Math.floor(Math.random()*this.state.colors.length)])
    });
    clearInterval(this.incrementer);
    this.setState({
      currentTime: startTime,
      clicks: [],
      procedure: newProcedure
    })
    this.incrementer = setInterval( () =>
      this.setState({
        currentTime: this.state.currentTime - 1
      })
    , 1000);
  }
  
  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      currentTime: startTime,
      clicks: [],
      procedure: [1, 2, 3, 4]
    });
  }

  handleBombButtonClick(color) {
    this.setState({ 
      clicks: [...this.state.clicks, color] 
    });
  }

  render() {
    // Win condition
    if(this.state.clicks.toString() === this.state.procedure.toString()) {
      clearInterval(this.incrementer)
      return (
        <div>
          <h1>Bomb Defuser</h1>
          <h3>YOU DEFUSED THE BOMB!</h3>
          <Button name="Try Again?" class="start-btn" onClick={this.handleResetClick.bind(this)} />
        </div>
      );
    }

    // Lose conditions
    if(this.state.currentTime === 0 || this.state.clicks.length > this.state.procedure.length) {
      clearInterval(this.incrementer);
      return (
        <div>
          <h1>Bomb Defuser</h1>
          <h3>YOU BLEW UP!</h3>
          <Button name="Try Again?" class="start-btn" onClick={this.handleResetClick.bind(this)} />
        </div>
      );
    }

    // Flash procedure on start
    if(this.state.currentTime >= (startTime-3) && this.state.currentTime < (startTime)) {
      return (
        <div>
          <h1>Bomb Defuser</h1>

          <div class="box">
            <Timer currentTime={this.state.currentTime} />

            <div className="game-btns">
              <Button name="Start" class="start-btn" onClick={this.handleStartClick.bind(this)} />
              <Button name="Reset" class="reset-btn" onClick={this.handleResetClick.bind(this)} />
            </div>

            <div className="bomb-btns">
              <Button name="red" class="red-btn" onClick={() => this.handleBombButtonClick("red")} />
              <Button name="blue" class="blue-btn" onClick={() => this.handleBombButtonClick("blue")} />
              <Button name="yellow" class="yellow-btn" onClick={() => this.handleBombButtonClick("yellow")} />
              <Button name="green" class="green-btn" onClick={() => this.handleBombButtonClick("green")} />
              <Button name="orange" class="orange-btn" onClick={() => this.handleBombButtonClick("orange")} />
              <Button name="purple" class="purple-btn" onClick={() => this.handleBombButtonClick("purple")} />
            </div>

            <Procedure colors={this.state.procedure}/>
            <Clicks colors={this.state.clicks} />
          </div>
          
        </div>
      );
    }

    // Default view
    return (
      <div>
        <h1>Bomb Defuser</h1>

        <div class="box">
          <Timer currentTime={this.state.currentTime} />

          <div className="game-btns">
            <Button name="Start" class="start-btn" onClick={this.handleStartClick.bind(this)} />
            <Button name="Reset" class="reset-btn" onClick={this.handleResetClick.bind(this)} />
          </div>
          
          <div className="bomb-btns">
            <Button name="red" class="red-btn" onClick={() => this.handleBombButtonClick("red")} />
            <Button name="blue" class="blue-btn" onClick={() => this.handleBombButtonClick("blue")} />
            <Button name="yellow" class="yellow-btn" onClick={() => this.handleBombButtonClick("yellow")} />
            <Button name="green" class="green-btn" onClick={() => this.handleBombButtonClick("green")} />
            <Button name="orange" class="orange-btn" onClick={() => this.handleBombButtonClick("orange")} />
            <Button name="purple" class="purple-btn" onClick={() => this.handleBombButtonClick("purple")} />
          </div>

          <Clicks colors={this.state.clicks} />
        </div>
      </div>
    );
  }
}

