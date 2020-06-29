import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import imgOne from '../../images/1.jpg'
import imgTwo from '../../images/2.jpg'
import imgThree from '../../images/3.jpg'
import imgFour from '../../images/4.jpg'
import imgFive from '../../images/5.jpg'
import "./Home.css"

function Home(){
    return(
       
        <Container id="Container">
            <Row>
                
                <Carousel id="Carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {imgOne}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to PointMint</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {imgTwo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p className="content">Our goal is to create a user-friendly application where you can schedule appointments with your doctor directly</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {imgThree}
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <p className="content">By making scheduling easier, you will have more free time for what matters most </p>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
<img
      className="d-block w-100"
      src= {imgFour}
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <p className="content">So Sign Up today! Or if you're an existing User, Sign In to your profile </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
<img
      className="d-block w-100"
      src= {imgFive}
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <h3>And thank you for being a part of the PointMint Community! </h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
               
            </Row>

        </Container>
       
    )
}

export default Home;
