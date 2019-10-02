import React from "react";
import axios from "axios";
import DataCard from "./DataCard";
import { Card, MyData } from "./Styles";

class DataFetch extends React.Component {
    state = {
        user: "",
        followers: [],
        // followNum: "",
        // followingNum: "",
    };

componentDidMount() {
    axios
        .get("https://api.github.com/users/JaxAtwood")
        .then(res => {
            
            console.log("userData", res.data);
            console.log("MyName", res.data.name);
            console.log("FollowNum", res.data.followers)
            console.log("FollowingNum", res.data.following)

            this.setState({
                user: res.data
        });
    })
        .catch(err => console.log(err));


    axios
        .get("https://api.github.com/users/JaxAtwood/followers")
        .then(res => {
            console.log("followerData", res.data);
            this.setState({
                followers: res.data
        });
    })
        .catch(err => console.log(err));

}


render() {
    return (
        <Card className="tracker">
            <MyData className="userData">
                <h1>My Name is: {this.state.user.name}</h1>
                <h2>I have {this.state.user.followers} followers</h2>
                <h2>I am following {this.state.user.following} users</h2>
                <h4>My GitHub handle is: {this.state.user.login}</h4>
            </MyData>
            <div className="followerData">
                <DataCard 
                    followers={this.state.followers}
                />
            </div>
        </Card>
    );
  }
}

export default DataFetch;