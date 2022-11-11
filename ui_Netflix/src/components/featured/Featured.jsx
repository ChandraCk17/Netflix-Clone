import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="historical">Historical</option>
                    <option value="romance">Romance</option>
                    <option value="thriller">Thriller</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                    <option value="sci-fi">Sci-Fi</option>
                </select>
                </div>
        )}
        <img 
         src="https://www.pixel4k.com/wp-content/uploads/2021/08/kristen-stewart-roberi-and-fraud-doris-sunglasses-4k_1629775931-2048x1152.jpg.webp"
         alt=""
        />
        <div className="info">
            <img
                src="https://blog.logomyway.com/wp-content/uploads/2021/09/avengers-logo-transparent.png"
            />
            <span className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sint, tempore! Nam pariatur, ea ex vitae corrupti quia animi
                autem nisi modi dolorum molestiae temporibus tenetur labore 
                sint numquam beatae? Voluptates.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  );
}
