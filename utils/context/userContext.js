import React from 'react'; 

const UserContext = React.createContext({
    display: false, 
    name: "",
    email: ""

}); 

export default UserContext; 