import React, { useEffect, useState, useContext } from "react";
import { FormContext } from "../resources/Form";

const TIME_LIMIT = 30;

const Timer = () => {
  const [seconds, setSeconds] = useState(TIME_LIMIT);
  const { searchParam, loading, targetUser, dispatch, appStatus } = useContext(
    FormContext
  );
  const isActive = searchParam && !loading && appStatus === "playing";

  useEffect(() => {
    let interval: any = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);

      if (seconds <= 0) {
        clearInterval(interval);
        setSeconds(TIME_LIMIT);
      }
    } else if (!isActive && seconds <= 0) {
      clearInterval(interval);
      setSeconds(TIME_LIMIT);
      dispatch({ type: "setAppStatus", payload: "lose" });
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, dispatch]);

  if (appStatus === "winner") {
    return <h3>{"Your Nailed it !!!!!!"}</h3>;
  }

  if (appStatus === "lose" || seconds <= 0) {
    return <h3>{"Timeout!!!"}</h3>;
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
