import React, { useState } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  font-size: 8px;
  border-radius: 5px;
  padding: 12px;
  background: transparent;
  color: black;
  border: 1px solid #00BFFF;
  cursor: pointer;
  &:active {
    background: #00BFFF;
  }
  & + & {
    margin-left: 10px;
  }
`;

const Footer = styled.div`
  padding-top: 36px;
`



export default function Paginator({ page, handlePageClick}) {
  return (
    <><Container>
      <Button onClick={() => {handlePageClick("First")}}>第一頁</Button>
      <Button onClick={() => {handlePageClick("Prev")}}>上一頁</Button>
      {page}
      <Button onClick={() => {handlePageClick("Next")}}>下一頁</Button>
      <Button onClick={() => {handlePageClick("Last")}}>最末頁</Button>
    </Container>
    <Footer>    
    </Footer></>
  );
}


