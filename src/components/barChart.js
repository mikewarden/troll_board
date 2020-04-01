import React from "react"
import { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PersonIcon from '@material-ui/icons/Person'

const TrollChart = (props) => {

    return (
        <div style={styles.chartStyle}>
            <Container fluid>
                <Row>
                    <Col lg={1}>{props.userIcon}</Col>
                <Col lg={11} ><ProgressBar variant="success" style={styles.barStyle} now={props.bar1} label={`Rigo ${props.bar1}%`} />
                </Col>
                </Row>
                <Row>
                    <Col lg={1}>{props.userIcon}</Col>
                <Col lg={11} ><ProgressBar variant="warning" style={styles.barStyle} now={props.bar2} label={`Dick Wyn ${props.bar2}%`} />
                </Col>
                </Row>
                <Row>
                    <Col lg={1}>{props.userIcon}</Col>
                <Col lg={11} ><ProgressBar variant="info" style={styles.barStyle} now={props.bar3} label={`Juan ${props.bar3}%`} />
                </Col>
                </Row>
                <Row>
                    <Col lg={1}>{props.userIcon}</Col>
                <Col lg={11} ><ProgressBar variant="danger" style={styles.barStyle} now={props.bar4} label={`Josh ${props.bar4}%`} />
                </Col>
                </Row>
                <Row>
                    <Col lg={1}>{props.userIcon}</Col>
                <Col lg={11} ><ProgressBar variant="success" style={styles.barStyle} now={props.bar5} label={`Brandon ${props.bar5}%`} />
                </Col>
                </Row>
                <Row>
                    <Col lg={1}>{props.userIcon}</Col>
                <Col lg={11} ><ProgressBar variant="warning" style={styles.barStyle} now={props.bar6} label={`Jaeho ${props.bar6}%`} />
                </Col>
                </Row>
                <Row>
                    <Col lg={1}>{props.userIcon}</Col>
                <Col lg={11} ><ProgressBar variant="info" style={styles.barStyle} now={props.bar7} label={`Mike ${props.bar7}%`} />
                </Col>
                </Row>
                <Row>
                    <Col lg={1}>{props.userIcon}</Col>
                <Col lg={11} ><ProgressBar variant="danger" style={styles.barStyle} now={props.bar8} label={`Guest ${props.bar8}%`} />
                </Col>
                </Row>
            </Container>
            

        </div>
    )
}
const styles = {
    barStyle: {
    marginBottom: '8px',
    height: '30px',
    backgroundColor: '#323B42'
    },
    chartStyle: {
        backgroundColor: '#262C31', 
    }
}


export default TrollChart;