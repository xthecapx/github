import { useState, useRef, useContext, useEffect } from "react";
import { FormContext } from "../resources/Form";

const TIME_LIMIT = 30;

const useTimer = () => {
  const [seconds, setSeconds] = useState(TIME_LIMIT);
  const intervalRef: any = useRef();
  const { searchParam, loading, targetUser, dispatch, appStatus } = useContext(
    FormContext
  );
  const isActive =
    searchParam &&
    !loading &&
    (appStatus === "playing" || appStatus === "try-again");
  const clearIntervalRef = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };
  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(
        () => setSeconds((seconds) => seconds - 1),
        1000
      );
    }
  };

  useEffect(() => {
    if (isActive) {
      start();
    }
    return clearIntervalRef;
  }, [isActive]);

  return {
    seconds,
    appStatus,
    targetUser,
    dispatch,
  };
};

export default useTimer;
