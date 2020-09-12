import React, { useContext, FormEvent } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FormContext } from "../resources/Form";

const Search = () => {
  const { form, updateField, dispatch, loading } = useContext(FormContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!loading) {
      dispatch({ type: "setSearchParam" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <TextField
            value={form.query}
            onChange={updateField}
            name="query"
            placeholder="Search Github"
            label="Search Github"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" type="submit" disabled={loading}>
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Search;
