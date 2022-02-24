import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { login, getMe, register} from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";


const Form = styled.form`
margin:0px auto;
padding:20px;
text-align:center;
`

const Input = styled.input`
  height:26px;
  padding: 5px;
  margin: 16px 0;
`;

const ErrorMessage = styled.div`
  color:red
`

const Register = styled.div`
border: 1px solid rgba(236, 109, 81, 0.5);
width: 26%;
margin: 0px auto;
padding:15px 1px;
border-radius: 5px
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
    <Form onSubmit={handleSubmit}>
      <Register>
        <div>
          nickname: {" "}
          <Input value={nickname} onChange={(e) => setNickname(e.target.value)}/>
        </div>
        <div>
          username: {" "}
          <Input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          password: {" "}
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className="btn btn-outline-dark btn-sm">註冊</button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Register>
    </Form>
  );
}

