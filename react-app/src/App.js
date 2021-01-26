import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignupFormPage";
import NavBar from "./components/NavBar";
import * as sessionActions from "./store/session";
//
import MainPage from "./components/MainPage"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(false));
  }, [dispatch]);

  const user = useSelector(state => state.session.user)

  return (
    <>
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" exact>
              <LoginForm />
            </Route> */}
          <Route path="/signup" exact>
            <SignupForm />
          </Route>
          <Route path="/users/:id" exact>
            <User />
          </Route>
          <Route path="/" exact>
            {!user && <MainPage />}
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
