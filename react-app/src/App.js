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
import Footer from "./components/Footer";

import Carousel from "./components/Carousel"

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
            {sessionUser ? <ProfilePage /> : <Redirect to="/" />}
          </Route>
          <Route path="/quiz/:id" exact>
            {sessionUser ? <QuizPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/quizzes/new">
            <NewQuizForm />
          </Route>
          <Route path="/" exact>
            {sessionUser && <Redirect to="/profile" />}
            <Carousel />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
