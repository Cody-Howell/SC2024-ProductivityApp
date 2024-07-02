import React from 'react';
import './scsscomp/App.css';

class App extends React.Component <{}, {counter: number}> {
  constructor(props: any){
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <div id="App">
        <h1>Hello!</h1>
        <p onClick={this.incrementCounter} style={{userSelect: "none", cursor: "pointer"}}>Click to increment.</p>
        <p>Count: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
