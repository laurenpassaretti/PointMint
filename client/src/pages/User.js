import React from "react";
import { UserContext } from "../utils/UserContext";



function User(props) {
  const { state } = React.useContext(UserContext);

  return (
    <div>
      <p>Name is {state.name}</p>
      <p>Email is {state.email}</p>
      <a href="/client">Schedule Appointment</a>
    </div>
  );
}

export default User;
