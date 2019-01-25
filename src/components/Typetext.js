import React from 'react';
import { 
  Card,
  CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle,
  Row, 
  Col, 
  Button } from 'reactstrap'; 

const Content = () => {
  return (
    <div>
      <Row>
        <Col sm = "4">
          <Card>
            <CardImg top width="50%" src="./image/sepatu.jpg" alt="image"/>
                <CardBody>
                  <CardTitle>Sepatu Adidas</CardTitle>
                    <CardSubtitle></CardSubtitle>
                      <CardText></CardText>
                        <Button onClick=''>Order</Button>
                      </CardBody>
                    </Card>
                  </Col>
        <Col sm = "4">
          <Card>
            <CardImg top width="50%" src="./image/kemeja.jpg" alt="image"/>
                <CardBody>
                  <CardTitle>Kemeja</CardTitle>
                    <CardSubtitle></CardSubtitle>
                      <CardText></CardText>
                        <Button onClick=''>Order</Button>
                      </CardBody>
                    </Card>
                  </Col>
        <Col sm = "4">
          <Card>
            <CardImg top width="50%" src="./image/batu.jpg" alt="image"/>
              <CardBody>
                <CardTitle>Accesory</CardTitle>
                  <CardSubtitle></CardSubtitle>
                    <CardText></CardText>
                      <Button onClick=''>Order</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          );
       };

export default Content;