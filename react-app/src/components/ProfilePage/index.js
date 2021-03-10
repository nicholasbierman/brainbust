import React, {useEffect} from "react";
import { getUserQuizzes } from '../../store/quiz'
import { getCategories } from '../../store/category';
import { useSelector, useDispatch } from "react-redux";
import UserpageBody from "./UserpageBody"
import SideUserBar from "./SideUserBar";
import TopDisplay from "./TopDisplay";
import "./ProfilePage.css"


const ProfilePage = () => {
  const user = useSelector(state => state.session.user);
  const quizzes = useSelector(state => state.quizzes.quizList)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserQuizzes(user.id));
    dispatch(getCategories());
  }, [dispatch, user])
  
  const categories = useSelector(state => state.categories.categories)

      return (
        <>
          <div className="page-container">
            <div className="page-container__top">
              
              <TopDisplay />
            </div>
            <div className="page-container__side">
              {categories && <SideUserBar categories={categories} />}
            </div>
            <div className="page-container__body">
              <UserpageBody quizzes={quizzes} />
            </div>
          </div>
        </>
      );
    }

export default ProfilePage;
