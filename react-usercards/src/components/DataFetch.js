// https://api.github.com/users/JaxAtwood

    // "login": "JaxAtwood",
    // "id": 52709784,
    // "url": "https://api.github.com/users/JaxAtwood",
    // "html_url": "https://github.com/JaxAtwood",
    // "name": "Jackie Atwood",
    // "location": "Currently Florida... Home to Maryland very soon!",
    // "bio": "Gamer, coding student, mother of an awesome little girl, proud Finn, and metal head...",
    // "followers": 44,
    // "following": 51,

import React from "react";
import axios from "axios";
// import DataCard from "./DataCard";

class DataFetch extends React.Component {
    state = {
        user: "",
        followers: [{}],
    };

componentDidMount() {
    axios
        .get("https://api.github.com/users/JaxAtwood")
        .then(res => {
            console.log(res.data);
            this.setState({
                user: res.data
        });
    })
        .catch(err => console.log(err));


    axios
        .get("https://api.github.com/users/JaxAtwood/followers")
        .then(res => {
            console.log(res.data);
            this.setState({
                followers: res.data
        });
    })
        .catch(err => console.log(err));

}


render() {
    return (
      <div className="userData">
          <h1>My Name is: {this.state.user.name}</h1>
        <p>Test</p>
      </div>
    );
  }
}

export default DataFetch;