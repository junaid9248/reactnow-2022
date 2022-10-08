import React from "react";
import './css/tweet.css'

function Usertweet(props){
    return(
        <div className="tweetbox">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
        </div>

    );
}

export default Usertweet;