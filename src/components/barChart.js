import React from "react"
import { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const TrollChart = (props) => {

    return (
        <div style={styles.chartStyle}>
            <ProgressBar variant="success" style={styles.barStyle} now={props.bar1} label={`Rigo ${props.bar1}%`} />
            <ProgressBar variant="warning" style={styles.barStyle} now={props.bar2} label={`Dick Wyn ${props.bar2}%`} />
            <ProgressBar variant="info" style={styles.barStyle} now={props.bar3} label={`Juan ${props.bar3}%`} />
            <ProgressBar variant="danger" style={styles.barStyle} now={props.bar4} label={`Josh ${props.bar4}%`} />
            <ProgressBar variant="success" style={styles.barStyle} now={props.bar5} label={`Brandon ${props.bar5}%`} />
            <ProgressBar variant="warning" style={styles.barStyle} now={props.bar6} label={`Jaeho ${props.bar6}%`} />
            <ProgressBar variant="info" style={styles.barStyle} now={props.bar7} label={`Mike ${props.bar7}%`} />
            <ProgressBar variant="danger" style={styles.barStyle} now={props.bar8} label={`Guest ${props.bar8}%`} />
            

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