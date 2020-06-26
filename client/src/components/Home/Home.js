import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import DoctorImg from '../../images/doctor.jpg'
import Kids from '../../images/kids.jpg'
import BearImg from '../../images/bear.jpg'
import signUp from '../../images/signUp.jpg'
import thumbsUp from '../../images/thumbsUp.jpg'
import "./Home.css"

function Home(){
    return(
        <Container>
            <Row>
                <Col md={{ span: 6, offset:3}}>
                <Carousel id="Carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {DoctorImg}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to PointMint</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {BearImg}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p className="content">Our goal is to create a user-friendly application where you can schedule appointments with your doctor directly</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {Kids}
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <p className="content">By making scheduling easier, you will have more free time for what matters most </p>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
<img
      className="d-block w-100"
      src= {signUp}
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <p className="content">So Sign Up today! Or if you're an existing User, Sign In to your profile </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
<img
      className="d-block w-100"
      src= {thumbsUp}
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <h3>And thank you for being a part of the PointMint Community! </h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </Col>
            </Row>

        </Container>
    )
}

export default Home;
