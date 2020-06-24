import axios from "axios"; 

export default {

getAppointments: function(){
    return axios.get("/appointments")
}, 
saveAppointment: function(apptData){
    return axios.post("/appointments", apptData)
}


}


  