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
   loadRequestedAppointments()
 }, []); 


  function loadRequestedAppointments(){
    API.getRequested(state.email)
    .then(res => {
    setAppointments(res.data)
  
  })
    .catch(err => console.log(err))

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
        <Row>
          <Col>
      <h4>To schedule a new appointment, click below:</h4>
      <ApptButton/>
      </Col>
      
      </Row>
      <Row>
          <Col>
      <h4>Your requested appointments:</h4>
      {appointments.map((item, idx) => (
        
          <ApptList key={idx}
                        name={item.name}
                        email={item.email}
                        phone={item.phone}
                        notes={item.notes}
                        date={item.date}/>
        ))}   
     
     
      </Col>
      
      </Row>
      </Container>
     
      
    </div>
  );
}

export default User;
