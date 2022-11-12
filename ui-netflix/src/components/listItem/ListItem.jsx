import "./listItem.scss";
import {
  PlayArrow, 
  Add, 
  ThumbUpAltOutlined, 
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer ="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcTD6wrcIE-F57C9FTIxPNEuODxuwPGB-vAfUQ";
  return (
    <div 
     className="listItem" 
     style={{ left: isHovered && index * 225 - 50 + index * 2.5}}
     onMouseEnter={() => setIsHovered(true)} 
     onMouseLeave={() => setIsHovered(false)}
    >
        <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/Avatar-The-Way-of-Water-Poster.jpg"
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

