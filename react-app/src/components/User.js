import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux"

function User() {
  // const [user, setUser] = useState({});
  const user = useSelector(async state => await state.session.user)
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();
  if(!user || userId !== user.id) useHistory.push("/")

  // useEffect(() => {
  //   if (!userId) {
  //     return
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);

  // if (!user) {
  //   return null;
  // }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
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
export default User;
