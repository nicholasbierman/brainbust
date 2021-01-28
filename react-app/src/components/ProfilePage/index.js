import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import UserpageBody from "./UserpageBody"
import SideUserBar from "./SideUserBar";
import TopDisplay from "./TopDisplay";
// import { useParams } from "react-router-dom";


const ProfilePage = () => {
      // const [user, setUser] = useState({});
      const user = useSelector(state => state.session.user);
      const history = useHistory()
      // Notice we use useParams here instead of getting the params
      // From props.
    //   const { userId } = useParams();
      if(!user) history.push("/");

      return (
        <>
          <div>
            <TopDisplay />
          </div>
          <div>
            <SideUserBar />
          </div>
          <div>
            <UserpageBody />
          </div>
        </>
      );
    }
    
export default ProfilePage;