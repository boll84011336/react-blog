import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { getPosts, getPagePosts } from "../../WebAPI";
import Paginator from "../../components/Paginator"
// import { PageContext } from "../../context";

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ContainerBody = styled.div`
  
  padding: 20px 40px 30px 40px;
  max-width: 800px;
  margin: 30px auto;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    margin: 100px auto;
    overflow: hidden;
  }
`;

const PostContainer = styled.div`
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
 
`;

const PostTitle = styled(Link)`
  margin: 3px 20px;
  font-size: 28px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
`;

const PostDate = styled.p`
  color: rgba(0, 0, 0, 0.8);
  margin-left: 10px;
  font-size: 16px;
`; 
const Information = styled.div`
  width: 700px; 
  display: flex;
  align-items: center;
  margin: 3px 30px;
  padding-left: 5px;
`

const pStyle = {
  paddingLeft: "10px",
}

function Post({ post }) {
  return (
    <><ContainerBody>
      <PostContainer>
        <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>      
      </PostContainer>
      <Information>
        <p>Posted by</p> <p style={pStyle}>{post.user.nickname}</p>
        <p style={pStyle}>on</p><PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate> 
      </Information>
    </ContainerBody></>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

//這邊是我的首頁
export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(); //全部共有幾頁
  const [page, setPage] = useState(1); //控制現在要去第幾頁 ， 當前頁數

  getPosts().then((data) => {
    const totalPost = Number(data.length); //總共幾筆
    setTotalPage(Math.ceil(totalPost / 5)); //共幾頁
  });

  useEffect(() => { 
    getPagePosts(page).then(posts => {
      setPosts(posts)
    });
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  }, [page]);

  const handlePageClick = (button) => {     
      if (button === "First") {  
        return setPage(1);
      }

      if (button === "Prev" && page > 1) {   
        return setPage(page - 1);
      }

      if (button === "Next" && page < totalPage) {
        return setPage(page + 1);
      }

      if (button === "Last") {
        return setPage(totalPage);
      }
  };
  // useEffect(() => {
  //   getPosts().then((posts) => {
  //     setPosts(posts)
  //   });
  // }, []);

  return (
    <Root>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Paginator page={page} handlePageClick={handlePageClick}/>
    </Root>
  );
}

