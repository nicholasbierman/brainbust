import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const ProfilePage = () => {
      // const [user, setUser] = useState({});
      const user = useSelector(state => state.session.user);
      const history = useHistory()
      // Notice we use useParams here instead of getting the params
      // From props.
    //   const { userId } = useParams();
      if(!user) history.push("/");

      return (
        <ul>
          <li>
            <strong>User Id</strong> {user.id}
          </li>
          <li>
            <strong>Username</strong> {user.username}
          </li>
          <li>
            <strong>Email</strong> {user.email}
          </li>
        </ul>
      );
    }
    
export default ProfilePage;