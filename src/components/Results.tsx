import React, { useContext } from "react";
import { FormContext } from "../resources/Form";
import { useRequest } from "../api";

const Results = () => {
  const { searchParam } = useContext(FormContext);
  const { data, error, isValidating } = useRequest(
    searchParam ? `/users?q=${searchParam}&page=1&per_page=3` : undefined
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (isValidating) return <div>validating...</div>;

  console.log(data);

  return <div></div>;
};

export default Results;
