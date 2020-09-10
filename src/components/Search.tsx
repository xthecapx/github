import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FormContext } from "../resources/Form";

const Search = () => {
  const { form, updateField, setSearchParam } = useContext(FormContext);

  return (
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
        <Button
          variant="contained"
          type="button"
          onClick={() => {
            setSearchParam(form.query);
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
