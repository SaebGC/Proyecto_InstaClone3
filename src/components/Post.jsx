import React, { useState } from "react"; 
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";  // Corazón vacío
import FavoriteIcon from "@mui/icons-material/Favorite";  // Corazón lleno (color rojo)
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";  
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";  
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";  

const Post = ({ username, caption, image_url }) => {

  const [liked, setLiked] = useState(false);  // Estado para saber si el post está "liked" o no

  const toggleLike = () => {  // Función para cambiar el estado al hacer clic en el corazón

    setLiked(!liked);
  };

  return (
    <div className="post">
      {/* Información del post */}
      <div className="postInfo">
        <img
          className="postInfoImg"
          src="https://i.pinimg.com/736x/74/a7/bf/74a7bf3e184a689c975cc5a4b43bcb79.jpg"
          alt={username}
        />
        <div className="postInfousername">{username}</div>
        <div className="timingInfo">• Just now</div>
      </div> 

      {/* Imagen del post */}
      <div className="postImg">
        <img className="postImhage" src={image_url} alt="Post content" />
      </div>

      {/* Bloque de iconos */}
      <div className="iconsBlock">
        <div className="leftIcon">
          {/* Cambiamos el ícono y color según el estado "liked" */}
          {liked ? (
            <FavoriteIcon
              sx={{ fontSize: "30px", color: "red", cursor: "pointer" }}
              onClick={toggleLike}
            />
          ) : (
            <FavoriteBorderOutlinedIcon
              sx={{ fontSize: "30px", cursor: "pointer" }}
              onClick={toggleLike}
            />
          )}

          <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: "30px" }} />
          <SendOutlinedIcon sx={{ fontSize: "30px" }} />
        </div>
        <div className="rightIcon">
          <TurnedInNotOutlinedIcon sx={{ fontSize: "30px" }} />
        </div>
      </div>

      {/* Likes */}
      <div className="likeSection">
        <div className="imagesLike">
          <img
            className="likeImg"
            src="https://i.pinimg.com/736x/8a/e1/b9/8ae1b95b14d95f08c843206eef5ebdc1.jpg"
            alt=""
          />
          <img
            className="likeImg2"
            src="https://i.pinimg.com/736x/e1/02/9c/e1029c0cdecd77049f71959fcc5956c6.jpg"
            alt=""
          />
        </div>
        <div className="noOfLikes">122,897 likes</div>
      </div>

      {/* Texto del post */}
      <div className="postAbout">
        <div className="postAboutName">{username}</div>
        <div className="infoComment">{caption}</div>
      </div>

      {/* Comentarios */}
      <div className="noOfComment">View All 65 Comments</div>
      <div className="addComment">Add a comment</div>
    </div>
  );
};

export default Post;
