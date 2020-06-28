import React from 'react'
import './ApptButton.css'
import { Link } from 'react-router-dom'

function ApptButton(){
    return (
        <Link type="button" id="apptButton" to="/client">Schedule an Appointment</Link>
    )
}

export default ApptButton; 