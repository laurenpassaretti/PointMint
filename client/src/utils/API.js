import axios from "axios"; 

export default {

viewAppointments: function(){  
  return axios.get("/appointments/admin")
},

getAppointments: function(){
  return axios.get("/appointments")
}, 

saveAppointment: function(apptData){
    return axios.post("/appointments", apptData)
}


}


  