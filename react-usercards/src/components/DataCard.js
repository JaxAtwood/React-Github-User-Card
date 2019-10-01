import React from "react";

const DataCard = props => {
    return (
        <div className= "followers">
            {props.followers.map (item => {
                return (
                    <div>
                        <p>Followers: {item.followers}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default DataCard;