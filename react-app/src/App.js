import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import * as sessionActions from "./store/session";
import MainPage from "./components/MainPage"
import ProfilePage from "./components/ProfilePage"
import NewQuizForm from "./components/NewQuizForm"
import QuizPage from "./components/QuizPage"
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/profile" exact>
            {sessionUser && <ProfilePage />}
            {!sessionUser && <Redirect to="/" />}
          </Route>
          <Route path="/quiz/:id" exact>
            <QuizPage />
          </Route>
          <Route path="/" exact>
            {sessionUser && <Redirect to="/profile" />}
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
