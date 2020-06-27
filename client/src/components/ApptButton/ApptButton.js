import React from 'react'
import './ApptButton.css'

function ApptButton(){
    const handleButtonClick = () => {
            
       window.location.href="/client"
         
       }
    return (
        <button id="apptButton" onClick={handleButtonClick}>Schedule an Appointment</button>

          
    )
}

export default ApptButton; 