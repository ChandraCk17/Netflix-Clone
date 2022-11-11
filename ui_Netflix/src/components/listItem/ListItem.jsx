import "./listItem.scss"
import {
  PlayArrow, 
  Add, 
  ThumbUpAltOutlined, 
  ThumbDownOutlined
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer ="C:\Users\Ck17\Videos\Love - 32021.mp4";
  return (
    <div className="listItem" 
    style={{left: isHovered && index * 225 -50 + index * 2.5}}
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    >
        <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/movies-like-interstellar.jpg"
        alt=""
        />
        {isHovered && (
          <>
        <video src= {trailer} autoPlay ={true} loop />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon" />
            <Add className="icon" />
            <ThumbUpAltOutlined className="icon" />
            <ThumbDownOutlined className="icon" />
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quidem 
            accusamus id! Numquam, quae!
          </div>
          <div className="genre">Action</div>
        </div>
        </>
        )}
    </div>
  );
}

