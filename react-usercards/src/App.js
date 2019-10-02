import React from 'react';
import DataFetch from "./components/DataFetch";
import { Body, Title, Grid } from "./components/Styles";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: ""
    };
  }

  render() {
    return (
      <Body className="App">
        <Title>GitHub Follow Tracker</Title>
          <Grid className="followersGrid">
            <DataFetch 
              followers={this.state.followers}
            />
          </Grid>
      </Body>
    );
  }
}

export default App;
