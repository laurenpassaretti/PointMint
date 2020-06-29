import React, { useState, useEffect } from "react";
import {Form, Button} from "react-bootstrap";
import API from "../utils/API";
import DTP from '../components/DatePicker/DatePicker'
import { UserContext } from "../utils/UserContext";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './client.css';

function Client() {
    const { state } = React.useContext(UserContext);
    const [ setAppointments ] = useState([])
    const [formObject,setFormObject] = useState({
        name: "",
        phone: "",
        notes: "", 
        date: ""
    })
    
    useEffect(() => {
        loadAppointments()
    }, [])

    const onChange = date => setFormObject({ ...formObject, date });

    function loadAppointments(){
        API.getAppointments()
        .then(res => setAppointments(res.data)
        ).catch(err => console.log(err));
    }

    function handleFormSubmit(event){
        event.preventDefault(); 
        console.log(state)
        if (formObject.date || formObject.notes){
            API.saveAppointment({
                name: state.name,
                email: state.email,
                phone: formObject.number,
                notes: formObject.notes,
                date: formObject.date
            })
            .then(() => setFormObject({
                name: "",
                phone: "", 
                notes: "", 
                date: ""
            }))
            .then(() => loadAppointments())
            .catch(err => console.log(err)); 
        }
    }
    function handleInputChange(event){
        const { name, value } = event.target; 
        setFormObject({...formObject, [name]:value})
    }



    return(


<Container>
  <Row>
    <Col></Col>
    <Col xs={12} md={8}>
    <div className="justify-content-md-center pt-3" id="Header">
      <h3 id="Header">Schedule An Appointment</h3>
      </div>


            <Form >
              
            {/* <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    name="name"
                    onChange={handleInputChange}
                    value={formObject.name}
                    ></Form.Control>
                </Form.Group> */}
                {/* <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        disabled
                        as="textarea"
                        placeholder={state.email}
                    ></Form.Control>
                </Form.Group> */}
                
                <Form.Group>
                    <div id="formtext" className="pl-3">
                    Appointment Notes
                    </div>
                    <Form.Control 
                    as="textarea" 
                    name="notes"
                    onChange={handleInputChange}
                    value={formObject.notes}
                    ></Form.Control>
                </Form.Group>
               
                <Form.Group>
                    <div id="formtext" className="pl-3">
                    Phone Number
                    </div>
                    <Form.Control 
                    as="textarea"
                    name="number"
                    onChange ={handleInputChange}
                    value={formObject.number}
                    ></Form.Control>
                </Form.Group>

                <Form.Group>
                    <div id="formtext" className="pl-3">
                    Available Appointments
                    </div>
                    <DTP
                    onChange={onChange}
                    value={formObject.date}
                    name="date"
                    />
                </Form.Group>

                <Button 
                variant="primary" 
                type="submit"
                onClick={handleFormSubmit}
                id="SubmitButton"
                >
                Submit
                </Button>

                <div className="mb-3"></div>
             
            </Form>
  

    </Col>
    <Col></Col>
  </Row>
</Container>


     
           
    );
}

export default Client;