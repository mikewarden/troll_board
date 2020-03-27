import React from "react"
import { useState } from 'react'
import Navbar from "../components/navbar.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import PersonIcon from '@material-ui/icons/Person'
import TrollChart from '../components/barChart'
import UserCard from '../components/card'
import SheriffMenu from '../components/dropdown'
import Background from '../images/Bitmap.png'

const moment = require('moment');

const App = (props) => {
    const [bar1Data, setBar1Data] = useState(0);
    const [bar2Data, setBar2Data] = useState(0);
    const [bar3Data, setBar3Data] = useState(0);
    const [bar4Data, setBar4Data] = useState(0);
    const [bar5Data, setBar5Data] = useState(0);
    const [bar6Data, setBar6Data] = useState(0);
    const [bar7Data, setBar7Data] = useState(0);
    const [bar8Data, setBar8Data] = useState(0);
    const [sheriffName, setSheriff] = useState("Who is the Sheriff?");

    let bar1 = bar1Data;
    let bar2 = bar2Data;
    let bar3 = bar3Data;
    let bar4 = bar4Data;
    let bar5 = bar5Data;
    let bar6 = bar6Data;
    let bar7 = bar7Data;
    let bar8 = bar8Data;

    const incrementBar1 = () => {
        setBar1Data(bar1Data + 1);
    }
    const incrementBar2 = () => {
        setBar2Data(bar2Data + 1);
    }
    const incrementBar3 = () => {
        setBar3Data(bar3Data + 1);
    }
    const incrementBar4 = () => {
        setBar4Data(bar4Data + 1);
    }
    const incrementBar5 = () => {
        setBar5Data(bar5Data + 1);
    }
    const incrementBar6 = () => {
        setBar6Data(bar6Data + 1);
    }
    const incrementBar7 = () => {
        setBar7Data(bar7Data + 1);
    }
    const incrementBar8 = () => {
        setBar8Data(bar8Data + 1);
    }

    const decrementBar1 = () => {
        setBar1Data(bar1Data - 1);
    }
    const decrementBar2 = () => {
        setBar2Data(bar2Data - 1);
    }
    const decrementBar3 = () => {
        setBar3Data(bar3Data - 1);
    }
    const decrementBar4 = () => {
        setBar4Data(bar4Data - 1);
    }
    const decrementBar5 = () => {
        setBar5Data(bar5Data - 1);
    }
    const decrementBar6 = () => {
        setBar6Data(bar6Data - 1);
    }
    const decrementBar7 = () => {
        setBar7Data(bar7Data - 1);
    }
    const decrementBar8 = () => {
        setBar8Data(bar8Data - 1);
    }

    const handleSheriffClick = (name) => {
        console.log(name);
        setSheriff(name);
    }
    
        return (
            <div style={styles.bodyStyles}>
                <Navbar />
                <div id="header_section">
                    
                </div>
            <Container style={styles.appStyles}>
                <Row>
                    <Col xs={10}>
                        <br/>
                        <span style={styles.headerText}><h2>Troll Board</h2></span>
                        <span style={styles.headerText}>{moment().format('dddd') + ", "}
                        {moment().format('MMMM Do YYYY, h:mm a')}</span>
                        <br/>
                        <br/>
                    </Col>
                    {/* Start Trolling button is currently useless. */}
                    <Col xs={2}><Button style={styles.buttonStyle} variant="warning">Start Trolling</Button></Col>
                    </Row>
                    <Row>
                    <Col xs={2}>
            <SheriffMenu onChange={handleSheriffClick} />
                    </Col>
                    <Col xs={10}>
                        <h4 style={styles.headerText}>{sheriffName}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={styles.cardStyle}>
                            <Card.Body style={{backgroundColor:'#262C31'}}>
                                <h4 style={styles.headerText}>Overview</h4>
                                <TrollChart
                                    bar1={bar1}
                                    userIcon={<PersonIcon />}
                                    bar2={bar2}
                                    userIcon={<PersonIcon />}
                                    bar3={bar3}
                                    userIcon={<PersonIcon />}
                                    bar4={bar4}
                                    userIcon={<PersonIcon />}
                                    bar5={bar5}
                                    userIcon={<PersonIcon />}
                                    bar6={bar6}
                                    userIcon={<PersonIcon />}
                                    bar7={bar7}
                                    userIcon={<PersonIcon />}
                                    bar8={bar8}
                                    userIcon={<PersonIcon />}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                <h5 style={styles.headerText}>Users</h5>
                <hr style={{backgroundColor: "#979797"}} />
                <Row>
                    <Col>
                        <UserCard 
                            name="Rigo" 
                            increment={incrementBar1}
                            decrement={decrementBar1}
                            userPic={<PersonIcon />}
                            numTrolls={bar1Data}
                        />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Dick Wyn" 
                            increment={incrementBar2}
                            decrement={decrementBar2}
                            userPic={<PersonIcon />}
                            numTrolls={bar2Data}
                            />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Juan" 
                            increment={incrementBar3}
                            decrement={decrementBar3}
                            userPic={<PersonIcon />}
                            numTrolls={bar3Data}
                        />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Josh" 
                            increment={incrementBar4}
                            decrement={decrementBar4}
                            userPic={<PersonIcon />}
                            numTrolls={bar4Data}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UserCard 
                            name="Brandon" 
                            increment={incrementBar5}
                            decrement={decrementBar5}
                            userPic={<PersonIcon />}
                            numTrolls={bar5Data}
                        />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Jaeho" 
                            increment={incrementBar6}
                            decrement={decrementBar6}
                            userPic={<PersonIcon />}
                            numTrolls={bar6Data}
                        />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Mike" 
                            increment={incrementBar7}
                            decrement={decrementBar7}
                            userPic={<PersonIcon />}
                            numTrolls={bar7Data}
                            />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Guest" 
                            increment={incrementBar8}
                            decrement={decrementBar8}
                            userPic={<PersonIcon />}
                            numTrolls={bar8Data}
                            />
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }

    const styles = {
        bodyStyles: {
            backgroundImage: `url(${Background})`
        },
        appStyles: {
        backgroundColor: '#262C31',
        width: '100%',
        height: '100%'
        },
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

export default App;