import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Admin() {

const [appointments, setAppointments] = useState([])
  useEffect(() => {
      loadAppointments()
  }, [])

  function loadAppointments(){
      API.viewAppointments()
      .then(res => {
        console.log("something", res.data)
        setAppointments(res.data)
      } 
      ).catch(err => console.log(err))
  }

return(

  <div>

   {appointments.map(item=> item.name)}

  </div>
)}

export default Admin;

