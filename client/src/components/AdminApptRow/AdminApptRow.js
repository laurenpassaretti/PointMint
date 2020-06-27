import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AdminApptRow(props) {
    return(
        <Container border="secondary">
            <Row>
                <Col>
                    <div className="h3">{props.date}</div>
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