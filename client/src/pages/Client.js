import React from "react";
import { Card, Form, Button } from "react-bootstrap";

function Client() {
    return(
        <Card>
            <Card.Header>Schedule An Appointment</Card.Header>
            <Form>
                <Form.Group>
                    <Form.Label>Avaliable Appointments</Form.Label>
                    <Form.Control as="select">
                        <option value="0">Choose a date...</option>
                        <option value="June 20, 2020">June 20, 2020</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Appointment Notes</Form.Label>
                    <Form.Control as="textarea"></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>        
    );
}

export default Client;