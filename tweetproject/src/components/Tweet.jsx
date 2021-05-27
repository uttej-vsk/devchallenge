import React from "react";


const Tweet = props =>{
    return(
        <div className="card">
            {<div className="card-body">
                <h5 className="card-title">{props.tweet.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.tweet.handle}</h6>
                <p className="card-text">{props.tweet.tweet}</p>
                <a href="" className="card-link">
                    {props.tweet.phonenumber}
                </a>
                <a href="" className="card-link">
                    {props.tweet.email}
                </a>
            </div>}
        </div>
    )
}

export default Tweet;

