import { useState, useEffect } from 'react';
import routes from './../services/routes';
import * as http from './../services/http';

const { TWEETS } = routes;

const useTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTweets = () => {
    setIsLoading(true);

    setTimeout(() => {
      http.get(TWEETS).then((response) => {
        const tweetList = response.data.data;
        setTweets(tweetList);
        setIsLoading(false);
      });
    }, 2000);
  };

  useEffect(() => {
    getTweets();
  }, []);

  const addTweet = (tweet) => {
    http.post(TWEETS, tweet).then((response) => {
      const { data } = response;
      const newTweets = [data, ...tweets];
      setTweets(newTweets);
    });
  };

  const removeTweet = (id) => {
    const tweet = {
      id,
    };
    http.remove(TWEETS, tweet).then(() => {
      const newArray = tweets.filter(({ _id }) => _id !== id);
      setTweets(newArray);
    });
  };

  return {
    tweets,
    addTweet,
    removeTweet,
    isLoading,
  };
};

export default useTweets;
