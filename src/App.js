import React from 'react';
import './scsscomp/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  updateCount = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div id="App">
        <h1>Hello World!</h1>
        <p onClick={this.updateCount} style={{userSelect: "none", cursor: "pointer"}}>Click to increment count.</p>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default App;
