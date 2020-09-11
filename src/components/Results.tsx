import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import User from "./User";
import { FormContext } from "../resources/Form";
import { useRequest } from "../api";
import { ItemType } from "../api/useRequest";

const Results = () => {
  const { searchParam, page, changePageHandler } = useContext(FormContext);
  const { data, error, isValidating, PAGE_SIZE } = useRequest(
    searchParam ? `/users?q=${searchParam}` : undefined
  );

  if (error) return <div>failed to load</div>;
  if (isValidating) return <div>loading...</div>;

  console.log(data)

  return (
    <Grid container spacing={4}>
      {data?.items?.map((item: ItemType) => (
        <Grid item xs={4} key={item.id}>
          <User {...item} />
        </Grid>
      ))}
      {data?.total_count && (
        <Grid item xs={12}>
          <Pagination
            count={Math.ceil(data.total_count / PAGE_SIZE)}
            page={page}
            onChange={changePageHandler}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Results;
