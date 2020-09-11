import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import User from "./User";
import { FormContext } from "../resources/Form";
import { useRequest } from "../api";
import { ItemType } from "../api/useRequest";

const Results = () => {
  const { searchParam, page, changePageHandler, count } = useContext(
    FormContext
  );
  const { data, error, isValidating } = useRequest(
    searchParam ? `/users?q=${searchParam}` : undefined
  );

  if (error) return <div>failed to load</div>;
  if (isValidating) return <div>loading...</div>;

  return (
    <Grid container spacing={4}>
      {data?.items?.map((item: ItemType) => (
        <Grid item xs={4} key={item.id}>
          <User {...item} />
        </Grid>
      ))}
      {count > 1 && (
        <Grid item xs={12}>
          <Pagination count={count} page={page} onChange={changePageHandler} />
        </Grid>
      )}
    </Grid>
  );
};

export default Results;
