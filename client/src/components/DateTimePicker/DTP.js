import React  from 'react';
import DateTimePicker from 'react-datetime-picker';
 
function DTP (props) {

    return (
      <div>
        <DateTimePicker
          onChange={props.onChange} 
          value={props.value}
        />
      </div>
      
    );
   
 
}

export default DTP; 


