import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import AdminApptRow from "../components/AdminApptRow/AdminApptRow";
import API from "../utils/API";

function Admin() {
  const [appointments, setAppointments] = useState([]);
  const headerStyle = {
    fontfamily: 'sans-serif'
  };
  
  useEffect(() => {
    API.getAppointments()
    .then(res => setAppointments(res.data.sort(sortAppts)))
    .catch(err => console.log(err));
  }, []);

  function sortAppts(a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  }

  return(
      <Card>
        <Card.Header style={headerStyle}>Scheduled PointMints</Card.Header>
        {appointments.map((item, idx) => (
          <AdminApptRow key={idx}
                        name={item.name}
                        email={item.email}
                        phone={item.phone}
                        notes={item.notes}
                        date={item.date}/>
        ))}        
      </Card>
  );
}

export default Admin;

