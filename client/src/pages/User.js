import React, { useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import API from "../utils/API"
import ApptButton from '../components/ApptButton/ApptButton'
import ApptList from '../components/ApptList/ApptList'



function User(props) {
  const { state } = React.useContext(UserContext);

  const [appointments,setAppointments] = useState([])

  useEffect(() => {
    API.getRequested(state.email)
    .then(res => {
      setAppointments(res.data.sort(sortAppts))
    })
    .catch(err => console.log(err))
  }, []);

  function sortAppts(a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  }
 
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Welcome, {state.name}!</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Registered Email:</h4>
            <p>{state.email}</p>
          </Col>
        </Row>
        {state.user_type === "client" ? (
          <Row>
            <Col>
              <h4>To schedule a new appointment, click below:</h4>
              <ApptButton 
                link="/client"
                title="Schedule an Appointment"/>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <h4>To view scheduled appointments, click below:</h4>
              <ApptButton
                link="/admin"
                title="View All Appointments"/>
            </Col>
          </Row>
        )}
        {state.user_type === "client" ? (
          <Row>
            <Col>
              <h4>Your requested appointments:</h4>
              {appointments.map((item, idx) => (
                <ApptList key={idx}
                              // name={item.name}
                              // email={item.email}
                              // phone={item.phone}
                              notes={item.notes}
                              date={item.date}
                              approved={item.approved}/>
              ))}
            </Col>
          </Row>
        ) : (
          <div></div>
        )}
      </Container>
    </div>
  );
}

export default User;
