import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, Container, Row, Col
} from 'reactstrap';


const Characters = props =>{

    return(
        
             <Container>
            <Col sm="12" md={{ size: 6, offset: 3 }}> 
         
                <Card className = 'card'>
                    <CardBody>
                        <CardTitle>Name:{props.name}</CardTitle>
                        <CardText>Height:{props.height}cm</CardText>
                        <CardText>Weight:{props.weight}kg</CardText>
                        <CardText>Hair Color:{props.hair}</CardText>
                        <CardText>Skin Color:{props.skin}</CardText>
                    </CardBody>
                </Card>
                
            </Col>

        </Container>
      
    )
}

export default Characters