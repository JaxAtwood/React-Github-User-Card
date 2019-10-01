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

class DataFetch extends React.Component {
    state = {
        user: ""
    };

componentDidMount() {

    axios
        .get("https://api.github.com/users/JaxAtwood")
        .then(res => {
            // console.log(res.data);
            this.setState({
                user: res.data
        });
    })
        .catch(err => console.log(err));
}


render() {
    return (
      <div className="userData">
        <h1>Jackie's GitHub Info</h1>
        <p>{this.state.user.login}</p>
      </div>
    );
  }
}

export default DataFetch;