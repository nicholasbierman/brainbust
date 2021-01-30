import React, {useEffect} from "react";
import { Redirect } from "react-router-dom";
import { getUserQuizzes } from '../../store/quiz'
import { getCategories } from '../../store/category';
import { useSelector, useDispatch } from "react-redux";
import UserpageBody from "./UserpageBody"
import SideUserBar from "./SideUserBar";
import TopDisplay from "./TopDisplay";
import "./ProfilePage.css"

// import { useParams } from "react-router-dom";


const ProfilePage = () => {
  const user = useSelector(state => state.session.user);

      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getUserQuizzes(user.id));
        dispatch(getCategories());
      }, [dispatch, user])
      // const [user, setUser] = useState({});
      // const history = useHistory()
      // Notice we use useParams here instead of getting the params
      // From props.
    //   const { userId } = useParams();
      if(!user){
        return <Redirect to="/" />;
      }

      return (
        <>
          <div className="page-container">
            <div className="page-container__top">
              <TopDisplay />
            </div>
            <div className="page-container__side">
              <SideUserBar />
            </div>
            <div className="page-container__body">
              <UserpageBody />
            </div>
          </div>
        </>
      );
    }

export default ProfilePage;
