import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginFormPage";
import SignupForm from "./components/SignupFormPage";
import NavBar from "./components/NavBar";
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(false));
  }, [dispatch]);

  return (
    <>
      <NavBar isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route path="/login" exact>
              <LoginForm />
            </Route>
            <Route path="/signup" exact>
              <SignupForm />
            </Route>
          </Switch>
        )}
    </>
  );
}

export default App;
