import React from "react";
import Search from "./components/Search";
import Results from './components/Results';

import { FormProvider } from "./resources/Form";

import "./App.css";

function App() {
  
  return (
    <FormProvider>
        <div className="App">
          <Search />
          <Results />
        </div>
    </FormProvider>
  );
}

export default App;
