import React  from 'react';
import DatePicker from 'react-date-picker';
 
function DTP (props) {
const min = new Date (2020, 5, 25, 12, 30)
const max = new Date (2020, 6, 10, 12, 30)
    return (
      <div>
        <DatePicker
          onChange={props.onChange} 
          value={props.value}
          minDate = {min}
          maxDate = {max}
        />
      </div>
      
    );
   
 
}

export default DTP; 


