import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './style.css';

function AdminApptRow(props) {
    const dateSTR = new Date(props.date)

    const month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return(
        <Container border="secondary">
            <Row>
                <Col>
                    <div className="h3">{month[dateSTR.getMonth()]} {dateSTR.getDate()}, {dateSTR.getFullYear()}</div>
                </Col>
            </Row>
            <Row>
                <Col>                
                    <p><span className="h5">Client: </span>{props.name}</p>
                    <p><strong>Phone: </strong>{props.phone}</p>
                    <p><strong>Email: </strong><a href={"mailto:"+props.email}>{props.email}</a></p>
                </Col>
                <Col>
                    <p><span className="h5">Notes:</span></p>
                    <p>{props.notes}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminApptRow;