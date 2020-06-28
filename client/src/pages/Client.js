import React, { useState, useEffect } from "react";
import { Card, Form, Button} from "react-bootstrap";
import API from "../utils/API";
import DTP from '../components/DatePicker/DatePicker'
import { UserContext } from "../utils/UserContext";

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
                name: formObject.name,
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
        <Card>
            <Card.Header>Schedule An Appointment</Card.Header>
            <Form>
            <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    name="name"
                    onChange={handleInputChange}
                    value={formObject.name}
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        disabled
                        as="textarea"
                        placeholder={state.email}
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Appointment Notes</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    name="notes"
                    onChange={handleInputChange}
                    value={formObject.notes}
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Your Phone Number</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    name="number"
                    onChange ={handleInputChange}
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Available Appointments</Form.Label>
                   
                   <DTP
                   onChange={onChange}
                   value={formObject.date}
                   name="date"
                    />
                    </Form.Group>
                <Button variant="primary" type="submit"
                onClick={handleFormSubmit}
                >
                    Submit
                </Button>
            </Form>
        </Card>        
    );
}

export default Client;