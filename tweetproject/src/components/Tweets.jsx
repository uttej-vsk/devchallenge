import React from "react";
import Tweet from "./Tweet";

const Tweets = () => {
  const tweets = [
    {
      name: "Uttej",
      handle: "@1Uttej",
      tweet: "hi from backend",
      phonenumber: "9705859153",
      email: "uttejhearts@gmail.com",
    },

    {
      name: "Uttej Venkata ",
      handle: "@1Uttejvenkata",
      tweet: "hi from backend from venkata",
      phonenumber: "9705859153111",
      email: "uttejvenkata@gmail.com",
    },

    {
      name: "Uttejsastry",
      handle: "@1Uttej",
      tweet: "hi from backend 3",
      phonenumber: "9705859153 2344",
      email: "uttejsastry@gmail.com",
    },
  ];

  const renderTweets = () => {
    return tweets.map((el) => {
      return <Tweet tweet={el} />;
    });
  };
  return <div>{renderTweets()}</div>;
};

export default Tweets;
