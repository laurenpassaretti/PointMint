import React from 'react'
import './ApptButton.css'
import { Link } from 'react-router-dom'

function ApptButton(props){
    return (
        <Link type="button" id="apptButton" to={props.link}>{props.title}</Link>
    )
}

export default ApptButton; 