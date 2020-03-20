import React from 'react'
import {
    Card, CardText, CardBody, Col
} from 'reactstrap';
import styled from 'styled-components';


const Characters = props =>{
    console.log(props, 'cha props')

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
const character = props.character
    return(
        
             <Container>
            <Col> 
         
                <Card className = 'card'>
                    <CardBody>
                        <ChaName>{character.name}</ChaName>
                        <CardText>Height: {character.height}cm</CardText>
                        <CardText>Weight: {character.weight}kg</CardText>
                        <CardText>Hair Color: {character.hair}</CardText>
                        <CardText>Skin Color: {character.skin}</CardText>
                    </CardBody>
                </Card>
                
            </Col>

        </Container>
      
    )
}

export default Characters