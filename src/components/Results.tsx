import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import User from "./User";
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

  return (
    <Grid container spacing={4} >
      {data?.items?.map((item) => (
        <Grid item xs={4} key={item.id}>
          <User {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Results;
