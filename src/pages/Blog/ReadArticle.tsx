import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ReadArticle = () => {
  const navigate = useNavigate();
  const params = useParams()

  return (
    <div>
      You are reading article number - {params.id} 
      <br />
      here go back to
      <button onClick={() => navigate("/blog")}>Blog Page</button>
    </div>
  );
};

export default ReadArticle;
