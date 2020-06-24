import React, { useState, useEffect } from "react";
import { Card, Form, Button} from "react-bootstrap";
// import UserContext from '../../../utils/context/userContext'
import API from "../utils/API";
import DTP from '../components/DateTimePicker/DTP'




function Client() {

    const [appointments, setAppointments] = useState([])
    const [formObject,setFormObject] = useState({
        name: "",
        email: "",
        phone: "",
        notes: "", 
        date: ""
    })
    
    useEffect(() => {
        loadAppointments()
    }, [])

    const onChange = date => setFormObject({ ...formObject, date })
    
   const valid = function( current ){
        return current.day() !== 0 && current.day() !== 6;
    };


    function loadAppointments(){
        API.getAppointments()
        .then(res => setAppointments(res.data)
        ).catch(err => console.log(err))
    }

    function handleFormSubmit(event){
        event.preventDefault(); 
        console.log(formObject)
        if (formObject.date || formObject.notes){
            API.saveAppointment({
                name: formObject.name,
                email: formObject.email,
                phone: formObject.number,
                notes: formObject.notes,
                date: formObject.date
            })
            .then(() => setFormObject({
                name: "",
                email: "", 
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
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    name="email"
                    onChange={handleInputChange}
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Appointment Notes</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    name="notes"
                    onChange={handleInputChange}
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Your Phone Number</Form.Label>
                    <Form.Control as="textarea" name="number"
                     onChange ={handleInputChange}
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Available Appointments</Form.Label>
                   
                   <DTP
                   onChange={onChange}
                   value={formObject.date}
                   name="date"
                   allowPartialRange="true"
                   isValidDate={valid}            
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