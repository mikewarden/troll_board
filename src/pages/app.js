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
import TrollChart from '../components/barChart'
import UserCard from '../components/card'
import SheriffMenu from '../components/dropdown'

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
        setBar1Data(bar1Data + 5);
    }
    const incrementBar2 = () => {
        setBar2Data(bar2Data + 5);
    }
    const incrementBar3 = () => {
        setBar3Data(bar3Data + 5);
    }
    const incrementBar4 = () => {
        setBar4Data(bar4Data + 5);
    }
    const incrementBar5 = () => {
        setBar5Data(bar5Data + 5);
    }
    const incrementBar6 = () => {
        setBar6Data(bar6Data + 5);
    }
    const incrementBar7 = () => {
        setBar7Data(bar7Data + 5);
    }
    const incrementBar8 = () => {
        setBar8Data(bar8Data + 5);
    }

    const decrementBar1 = () => {
        setBar1Data(bar1Data - 5);
    }
    const decrementBar2 = () => {
        setBar2Data(bar2Data - 5);
    }
    const decrementBar3 = () => {
        setBar3Data(bar3Data - 5);
    }
    const decrementBar4 = () => {
        setBar4Data(bar4Data - 5);
    }
    const decrementBar5 = () => {
        setBar5Data(bar5Data - 5);
    }
    const decrementBar6 = () => {
        setBar6Data(bar6Data - 5);
    }
    const decrementBar7 = () => {
        setBar7Data(bar7Data - 5);
    }
    const decrementBar8 = () => {
        setBar8Data(bar8Data - 5);
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
                        <br/>
                        <span style={styles.headerText}>Week 3 March 14</span>
                        <br/>
                        <br/>
                    </Col>
                    <Col xs={2}><Button style={styles.buttonStyle} variant="warning">Start Trolling</Button></Col>
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
                            <Card.Body>
                                <h4 style={styles.headerText}>Overview</h4>
                                <TrollChart
                                    bar1={bar1}
                                    bar2={bar2}
                                    bar3={bar3}
                                    bar4={bar4}
                                    bar5={bar5}
                                    bar6={bar6}
                                    bar7={bar7}
                                    bar8={bar8}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                <h5 style={styles.headerText}>Users</h5>
                <Row>
                    <Col>
                        <UserCard 
                            name="Rigo" 
                            increment={incrementBar1}
                            decrement={decrementBar1}
                        />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Dick Wyn" 
                            increment={incrementBar2}
                            decrement={decrementBar2}
                            />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Juan" 
                            increment={incrementBar3}
                            decrement={decrementBar3}
                        />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Josh" 
                            increment={incrementBar4}
                            decrement={decrementBar4}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UserCard 
                            name="Brandon" 
                            increment={incrementBar5}
                            decrement={decrementBar5}
                        />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Jaeho" 
                            increment={incrementBar6}
                            decrement={decrementBar6}
                        />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Mike" 
                            increment={incrementBar7}
                            decrement={decrementBar7}
                            />
                    </Col>
                    <Col>
                        <UserCard 
                            name="Guest" 
                            increment={incrementBar8}
                            decrement={decrementBar8}
                            />
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }

    const styles = {
        bodyStyles: {
            background: 'rgb(75,80,87)',
background: 'radial-gradient(circle, rgba(75,80,87,1) 60%, rgba(167,167,167,1) 99%)'
        },
        appStyles: {
        backgroundColor: '#1D2224',
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