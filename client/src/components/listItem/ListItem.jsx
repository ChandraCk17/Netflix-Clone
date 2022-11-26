import "./listItem.scss";
import {
  PlayArrow, 
  Add, 
  ThumbUpAltOutlined, 
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({index, item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    useEffect(() => {
      const getMovie = async () => {
        try {
          const res = await axios.get("/movies/find/" + item, {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjdjNWE4MTg0MTBjZTczYzU5MmQxZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODk2NjczNywiZXhwIjoxNjY5Mzk4NzM3fQ.Qo-6yhW83kJGmv9b-vjuC_qZyTuOusXXAeZ1iZl8O3w",//+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          setMovie(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMovie();
    }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
    <div 
     className="listItem" 
     style={{ left: isHovered && index * 225 - 50 + index * 2.5}}
     onMouseEnter={() => setIsHovered(true)} 
     onMouseLeave={() => setIsHovered(false)}
    >
        <img src={movie?.imgSm} alt="" />
        {isHovered && (
        <>
        <video src= {movie.trailer} autoPlay ={true} loop />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon" />
            <Add className="icon" />
            <ThumbUpAltOutlined className="icon" />
            <ThumbDownOutlined className="icon" />
          </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className="limit">+{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">{movie.desc}</div>
          <div className="genre">{movie.genre}</div>
        </div>
      </>
      )}
    </div>
    </Link>
  );
}
