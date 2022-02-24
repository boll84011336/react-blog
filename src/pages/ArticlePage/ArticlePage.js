import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts";
import { useParams, useNavigate  } from "react-router-dom";
import { getPost, removePost } from "../../WebAPI";

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
`;

const PostTitle = styled.h3`
  text-align:center;
  font-weight: 500;
  font-family: cursive;
`;

const PostOther = styled.div`
  text-align:center;
`

const PostPeople = styled.p`
  margin-right:12px;
  display:inline;;
  font-weight: 600;
  color: cadetblue;
  font-family: 'Lora', 'Times New Roman', serif;
  font-style: italic;
`

const PostDate = styled.div`
  font-size: 14px;
  color: #127436;
  font-style: oblique;
  display:inline;
`;

const PostBody = styled.p`
  white-space: pre-wrap;
  text-align:left;
  margin-top: 20px;
`;

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.3);
`;



function Post({ post, onDelete }) {
  const { user } = useContext(AuthContext);

  if (!post) return null;
 
  return (    
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostOther>
        <PostPeople>Posted by {post.user.nickname} on</PostPeople>
        <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
        <PostBody>{post.body}</PostBody>             
        {user && user.nickname ===  post.user.nickname ? <button className="btn btn-dark btn-sm" onClick={onDelete}>刪除</button> : ''}    
      </PostOther>    
    </PostContainer>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default function ArticlePage() {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  
  const handleDelete = () => {   
    removePost(id).then(() => {
      navigate('/');
    });    
  };

  useEffect(() => {
    setIsLoading(true);
    getPost(id)
      .then((post) => {
        setIsLoading(false);
        setPost(post);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [id]);
 
  return (
    <Root>
      <Post post={post} onDelete={handleDelete} />
      {isLoading && <Loading>載入中</Loading>}
    </Root>
  );
}