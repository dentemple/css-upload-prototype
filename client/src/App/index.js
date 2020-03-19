import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import FileUploadPage from "../components/FileUploadPage";

function App() {
  useEffect(() => {
    fetch("/api/ping")
      .then(res => res.json())
      .then(json => void console.log("Connected to the server:", json));
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/customize">
          <FileUploadPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
