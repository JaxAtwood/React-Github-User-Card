import React from "react";
import { TheirData, Box, CardTitle } from "./Styles";

const DataCard = props => {
    console.log("This is props", props);
    return (
        <Box className= "followers">
            <CardTitle>*My Followers*</CardTitle>
            {props.followers.map (item => {
                return (
                    <div>
                        <TheirData>{item.login}</TheirData>
                    </div>
                );
            })}
        </Box>
    );
};

export default DataCard;