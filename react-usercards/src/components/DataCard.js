import React from "react";

const DataCard = props => {
    return (
        <div className= "card">
            {props.card.map (item => {
                return (
                    <div className= "followerCard" key={item.id}>
                        <p>{item.login}</p>
                        {/* <p>{item.}</p> */}
                    </div>
                );
            })}
        </div>
    );
};

export default DataCard;