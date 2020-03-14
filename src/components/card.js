import React from "react"
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';

const UserCard = (props) => {

    return (
        <Card style={styles.cardRowStyle}>
                            <Card.Body>
                                <Fab color="primary" aria-label="add" onClick={props.increment}>
                                    <AddIcon />
                                </Fab>
                                <h3>{props.name}</h3>
                                <img src={props.userPic}></img>
                            </Card.Body>
                        </Card>
    )
}

const styles = {
    buttonStyle: {
        right: '0',
        marginTop: '20%',
        marginBottom: '20%'
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