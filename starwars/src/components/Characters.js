import React from 'react'
import {
    Card, CardText, CardBody, Col
} from 'reactstrap';
import styled from 'styled-components';


const Characters = props =>{

 const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 2%;
  border-radius: 5px;
  `;

  const ChaName = styled.h2`
  
  font-size: 20px;
  font-decoration: bold;
  `;

    return(
        
             <Container>
            <Col> 
         
                <Card className = 'card'>
                    <CardBody>
                        <ChaName>{props.name}</ChaName>
                        <CardText>Height: {props.height}cm</CardText>
                        <CardText>Weight: {props.weight}kg</CardText>
                        <CardText>Hair Color: {props.hair}</CardText>
                        <CardText>Skin Color: {props.skin}</CardText>
                    </CardBody>
                </Card>
                
            </Col>

        </Container>
      
    )
}

export default Characters