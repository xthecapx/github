import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { FormContext } from "../resources/Form";

const Search = () => {
  const { form, updateField } = useContext(FormContext);

  return (
    <TextField
      value={form?.query}
      onChange={updateField}
      label="Search GitHub"
      name="query"
      placeholder="Placeholder"
      helperText="Full width!"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
    />
  );
};

export default Search;
