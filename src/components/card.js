import React from "react"
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const UserCard = (props) => {
    const addDeleteText = "Add/Delete a Troll";
    return (
        <Card style={styles.cardRowStyle}>
                            <Card.Body>
                                <h3>{props.name}</h3>
                                <p>{addDeleteText}</p>
                                <Fab size="small" style={styles.addButtonStyle} color="primary" aria-label="add" onClick={props.increment}>
                                    <AddIcon />
                                </Fab>
                                <Fab size="small" style={styles.minusButtonStyle} color="primary" aria-label="add" onClick={props.decrement}>
                                    <RemoveIcon />
                                </Fab>
                                <img src={props.userPic}></img>
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
        backgroundColor: '#1D2224',
    },
    cardRowStyle: {
        backgroundColor: '#3F4B4F',
        marginTop: '8%',
        marginBottom: '5%'
    },
    headerText: {
        color: '#DAE9F0',
        
    }
}

export default UserCard;