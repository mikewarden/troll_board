import React from "react"
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PersonIcon from '@material-ui/icons/Person';


const UserCard = (props) => {
    
    return (
        <Card style={styles.cardRowStyle}>
            <Card.Body>
                <Container >
                    <Row >
                        <Col xs={2}>
                            {props.userPic}
                        </Col>
                        <Col xs={10}>
                            <h5>{props.name}</h5>
                            <p>Typical Troll</p>
                        </Col>
                    </Row>
                    {/* <Fab size="small" style={styles.addButtonStyle} color="primary" aria-label="add" onClick={props.increment}>
                                    <AddIcon />
                                </Fab> */}
                    <Row>
                        <Col md={4} style={styles.rowStyle}>
                            <p>Trolls</p>
                            <p>{props.numTrolls}</p>
                        </Col>
                        <Col md={8} style={styles.rowStyle}>
                    <Button onClick={props.increment} style={styles.buttonStyle} variant="warning">+ Add Troll</Button>
                        </Col>
                    </Row>
                                {/* <Fab size="small" style={styles.minusButtonStyle} color="primary" aria-label="add" onClick={props.decrement}>
                                    <RemoveIcon />
                                </Fab> */}
                </Container>
            </Card.Body>
        </Card>
    )
}

const styles = {
    addButtonStyle: {
        marginRight: '10px',
        backgroundColor: '#00B02C'
    },
    minusButtonStyle: {
        marginRight: '10px',
        backgroundColor: '#FF4546'
    },
    cardStyle: {
        backgroundColor: '#323B42',
        color: '#FFF',
    },
    cardRowStyle: {
        color: '#FFF',
        backgroundColor: '#323B42',
        marginTop: '8%',
        marginBottom: '5%'
    },
    headerText: {
        color: '#FFF',
        
    },
     rowStyle: {
        border: '1px solid #424B52',
        padding: '16px'
    }
}

export default UserCard;