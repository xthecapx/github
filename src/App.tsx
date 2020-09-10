import React from "react";
import Search from './components/Search'

import { FormProvider } from "./resources/Form";

import "./App.css";

function App() {
  return (
    <FormProvider>
      <div className="App">
        <Search />
      </div>
    </FormProvider>
  );
}

export default App;
