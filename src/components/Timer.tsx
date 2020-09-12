import React, { useEffect } from "react";
import useTimer from "./useTimer";

const Timer = () => {
  const { seconds, appStatus, targetUser, dispatch } = useTimer();

  useEffect(() => {
    if (seconds <= 0) {
      dispatch({ type: "setAppStatus", payload: "lose" });
    }
  }, [seconds, dispatch]);

  if (appStatus === "winner") {
    return <h3>{"Your Nailed it !!!!!!"}</h3>;
  }

  if (appStatus === "lose" || seconds <= 0) {
    return <h3>{"Timeout! You Lose!"}</h3>;
  }

  if (appStatus === "playing" || appStatus === "try-again") {
    return (
      <h3 className="time">
        {seconds}s left to find <strong>{targetUser}</strong>
      </h3>
    );
  }

  return <h3>Waiting for any query</h3>;
};

export default Timer;
