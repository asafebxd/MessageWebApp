import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import logo from "./img/logo.png";
import "./Login.css";

const Login = (props) => {
   const [usernameReg, setUsernameReg] = useState("");
   const [passwordReg, setPasswordReg] = useState("");
   const [nameReg, setNameReg] = useState("");
 
   const [userId, setUserId] = useState(props.userId);
   const [username, setUsername] = useState(props.userName);

   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
 
   const inputC = useRef();

   // Referëncia uso de cookie session - Apagar no final ------->
   const storeCookie = async()=>{
      try{
      const {data} = await axios.post('http://localhost:8000/session', {
         userId: inputC.current.value,
      }, {withCredentials: true});
      } catch(error) {
      console.log(error);
      }
   };

   const getCookie = async () => {
      try {
      const {data} = await axios.get('http://localhost:8000/session', {withCredentials: true});
      setUserId(data.message.userId);
      console.log(data.message);
      } catch(error) {
      console.log(error);
      }
   }
   // <------- Referëncia uso de cookie session - Apagar no final 

   const register = () => {
      axios
        .post("http://localhost:8000/register", {
          email: usernameReg,
          password: passwordReg,
          name: nameReg,
        })
        .then((response) => {
          console.log(response);
        });
    };
  
    const login = () => {
      axios
        .post("http://localhost:8000/login", {
          email: username,
          password: password,
        }, {withCredentials: true})
        .then((response) => {
          console.log("fsdfsdafs",response);
          window.location.reload(false);
        });
    };

    return (
      <div className="App">
        {<div className="logo">
          <img  src={logo} width="100px" alt="fireSpot"/>
          <h1>
            Web messenger
          </h1>
          <p>Connecting ideas</p>
          
        </div>}
        <div className="registration">
          <h1>Registration</h1>
          <label></label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setNameReg(e.target.value);
            }}
          />
          <label></label>
          <input
            type="text"
            placeholder="e-mail"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <label></label>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <button onClick={register}>Register</button>
        </div>
        <div className="login">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={login}> Login </button>
        </div>
        
      </div>
    );

}

export default Login;