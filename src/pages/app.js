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

const App = (props) => {
    const [bar1Data, setBar1Data] = useState(23);
    const [bar2Data, setBar2Data] = useState(33);
    const [bar3Data, setBar3Data] = useState(43);
    const [bar4Data, setBar4Data] = useState(53);
    const [bar5Data, setBar5Data] = useState(63);
    const [bar6Data, setBar6Data] = useState(13);
    const [bar7Data, setBar7Data] = useState(43);
    const [bar8Data, setBar8Data] = useState(73);

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
    
        return (
            <div>
                <Navbar />
                <div id="header_section">
                    
                </div>
            <Container style={styles.appStyles}>
                <Row>
                    <Col xs={10}>
                        <br/>
                        <span style={styles.headerText}>Troll Board</span>
                        <br/>
                        <span style={styles.headerText}>Week 3 March 14</span>
                    </Col>
                    <Col xs={2}><Button style={styles.buttonStyle} variant="warning">Start Trolling</Button></Col>
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
                        <UserCard name="Rigo" increment={incrementBar1}/>
                    </Col>
                    <Col>
                    <UserCard name="Dick Wyn" increment={incrementBar2}/>
                    </Col>
                    <Col>
                    <UserCard name="Juan" increment={incrementBar3}/>
                    </Col>
                    <Col>
                    <UserCard name="Josh" increment={incrementBar4}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UserCard name="Brandon" increment={incrementBar5}/>
                    </Col>
                    <Col>
                        <UserCard name="Jaeho" increment={incrementBar6}/>
                    </Col>
                    <Col>
                        <UserCard name="Mike" increment={incrementBar7}/>
                    </Col>
                    <Col>
                        <UserCard name="Joseph" increment={incrementBar8}/>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }

    const styles = {
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