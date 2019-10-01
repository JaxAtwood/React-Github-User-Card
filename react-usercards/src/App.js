import React from 'react';
import DataFetch from "./components/DataFetch";
// import DataCard from "./components/DataCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: ""
    };
  }

  render() {
    return (
      <div className="App">
        <h1>React-Github-User-Card Project</h1>
        <div>
          <DataFetch 
            followers={this.state.followers}/>
        </div>
      </div>
    );
  }
}

export default App;
