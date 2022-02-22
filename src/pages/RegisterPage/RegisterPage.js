import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { login, getMe, register} from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";


const ErrorMessage = styled.div`
  color:red
`

export default function LoginPage() {
  const { setUser } = useContext(AuthContext)

  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("Lidemy");
  const [errorMessage, setErrorMessage] = useState();
  const Navigate = useNavigate()


  const handleSubmit = (e) => {
    setErrorMessage(null)
    register(nickname, username, password).then(data => {
      console.log(data)
      if(data.ok === 0) {
        return setErrorMessage(data.message)
      }
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
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        nickname: {" "}
        <input value={nickname} onChange={(e) => setNickname(e.target.value)}/>
      </div>
      <div>
        username: {" "}
        <input value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        password: {" "}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button>註冊</button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </form>
  );
}

