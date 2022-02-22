import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {createPost} from "../../WebAPI";


const Form = styled.form`
  border: solid 3px black;
  padding: 20px 40px 60px 40px;
  max-width: 800px;
  margin: 30px auto;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    margin: 100px auto;
    overflow: hidden;
  }
`;

const TitleInput = styled.input`
  margin-bottom: 12px;
  width: 100%;
  font-size: 16px;
  padding: 10px;
`;

const ContentTextarea = styled.textarea`
  width: 100%;
  font-size: 16px;
  padding: 12px;
`;


const Button = styled.button`
  padding: 12px;
  background: #ff8100;
  color: white;
  border: solid 1px #ff8100;
  cursor: pointer;
  float: right;
  &:hover {
    background: #ff8100;
  }
  & + & {
    margin-left: 5px;
  }
`;

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const Navigate = useNavigate()


  const handleSubmit = (e) => {
    createPost(title, content).then(data => {
      console.log(data)
      if (data.id) {
        Navigate("/");
      }     
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      Title:{" "}<TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
      Content:{" "}<ContentTextarea rows="20" value={content} onChange={(e) => setContent(e.target.value)} />
      <Button onClick={handleSubmit}>submit</Button>
    </Form>
  );
}
