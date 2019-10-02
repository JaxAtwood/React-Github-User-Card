import React from 'react';
import DataFetch from "./components/DataFetch";

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
        <h1>GitHub Follow Tracker</h1>
          <div className="followersGrid">
            <DataFetch 
              followers={this.state.followers}
            />
          </div>
      </div>
    );
  }
}

export default App;
