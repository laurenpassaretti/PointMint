import React from "react";
import { Card, Form, Button} from "react-bootstrap";

function Client() {

    const [appointments, setAppointments] = useState([])
    const [formObject,setFormObject] = useState({})


    function handleFormSubmit(event){
        event.preventDefault(); 
        if (formObject.date && formObject.notes){
            API.create({
                name: 
                email: 
                phone: formObject.number,
                notes: formObject.notes,
                date: formObject.date
            })
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
                    <Form.Label>Avaliable Appointments</Form.Label>
                    <Form.Control as="select">
                        <option value="0">Choose a date...</option>
                        <option name="date"value="June 20, 2020">June 20, 2020</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control>Appointment Notes</Form.Control>
                    <Form.Control as="textarea" name="notes"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control>Enter Your Phone Number (No Dashes)</Form.Control>
                    <Form.Control as="textarea" name="number"></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>        
    );
}

export default Client;