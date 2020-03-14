import React from "react"
import { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const TrollChart = (props) => {

    return (
        <div style={styles.chartStyle}>
            <ProgressBar variant="success" style={styles.barStyle} now={props.bar1} label={`${props.bar1}%`} />
            <ProgressBar variant="warning" style={styles.barStyle} now={props.bar2} label={`${props.bar2}%`} />
            <ProgressBar variant="info" style={styles.barStyle} now={props.bar3} label={`${props.bar3}%`} />
            <ProgressBar variant="danger" style={styles.barStyle} now={props.bar4} label={`${props.bar4}%`} />
            <ProgressBar variant="success" style={styles.barStyle} now={props.bar5} label={`${props.bar5}%`} />
            <ProgressBar variant="warning" style={styles.barStyle} now={props.bar6} label={`${props.bar6}%`} />
            <ProgressBar variant="info" style={styles.barStyle} now={props.bar7} label={`${props.bar7}%`} />
            <ProgressBar variant="danger" style={styles.barStyle} now={props.bar8} label={`${props.bar8}%`} />
            

        </div>
    )
}
const styles = {
    barStyle: {
    marginBottom: '8px',
    height: '20px',
    backgroundColor: '#3F4B4F'
    },
    chartStyle: {
        backgroundColor: '#1D2224', 
    }
}


export default TrollChart;