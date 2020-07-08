import React from "react"; 

function ApptList(props){
    const dateSTR = new Date(props.date)

    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    


    return (
        <div>
            <ul>
                {/* <li>Name: {props.name}</li> */}
                <li>Date: {month[dateSTR.getMonth()]} {dateSTR.getDate()} {dateSTR.getFullYear()}</li>
                <li>Notes: {props.notes}</li>
            </ul>
        </div>
    )
}

export default ApptList; 

