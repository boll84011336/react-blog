import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import ArticlePage from "../../pages/ArticlePage";
import NewPostPage from "../../pages/NewPostPage";
import RegisterPage from "../../pages/RegisterPage";
import Header from "../Header";
import { AuthContext, LoadingContext } from "../../contexts";
import { getMe } from "../../WebAPI";
import { getAuthToken } from "../../utils";

const Root = styled.div`
  padding-top: 64px;
`;


function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    if (getAuthToken()) {
      getMe().then((response) => {
        setIsLoading(false);
        if (response.ok) {
          setUser(response.data);
          setIsLoading(false)
        }
      });
    } else {
      setIsLoading(false);
    }
  },[]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <Root>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/posts/:id" element={<ArticlePage />}></Route>
            <Route path="/new-post" element={<NewPostPage />}></Route>
          </Routes>
        </Router>
      </Root>
      </LoadingContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
