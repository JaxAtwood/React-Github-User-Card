import React from "react";

const DataCard = props => {
    console.log("This is props", props);
    return (
        <div className= "followers">
            <h3>*My Followers*</h3>
            {props.followers.map (item => {
                return (
                    <div>
                        <p>{item.login}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default DataCard;