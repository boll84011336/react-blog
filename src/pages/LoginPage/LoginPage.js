import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { login, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";


const ErrorMessage = styled.div`
  color:red
`

export default function LoginPage() {
  const { setUser } = useContext(AuthContext)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const Navigate = useNavigate()

  const handleInputChange =(e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    setErrorMessage(null)
    login(username, password).then(data => {
      if(data.ok === 0) {
        return setErrorMessage(data.message)
      }
      setAuthToken(data.token)

      getMe().then(response => {
        if (response.ok !== 1) {
          setAuthToken(null);
          return setErrorMessage(response.toString());
        }
        setUser(response.data)
        Navigate("/");
      })    
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        username: {" "}
        <input value={username} onChange={handleInputChange}/>
      </div>
      <div>
        password: {" "}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button>登入</button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </form>
  );
}
