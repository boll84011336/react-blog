import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { login, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";

const Form = styled.form`
padding:20px;
text-align:center;

`

const Login = styled.div`
border: 1px solid rgba(236, 109, 81, 0.5);
width: 26%;
margin: 0px auto;
padding:15px 1px;
border-radius: 5px
`

const Input = styled.input`
  height:30px;
  padding: 5px;
  margin: 16px 0;
`;

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
        console.log(response, "回應")
        Navigate("/");
      })    
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Login>
      <div>
        username: {" "}
        <Input value={username} onChange={handleInputChange}/>
      </div>
      <div>
        password: {" "}
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button className="btn btn-outline-dark btn-sm">登入</button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Login>
    </Form>

  );
}
