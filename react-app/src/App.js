import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import * as sessionActions from "./store/session";
import MainPage from "./components/MainPage"
import ProfilePage from "./components/ProfilePage" 
import NewQuizForm from './components/NewQuizForm/NewQuizForm'
//components
import ProfilePage from "./components/ProfilePage" 

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
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/quizzes/new">
            <NewQuizForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
