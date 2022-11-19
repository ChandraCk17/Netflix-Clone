import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState  } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
    try {
        const res = await axios.get(
          `lists${type ? "?type" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjdjNWE4MTg0MTBjZTczYzU5MmQxZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODg3OTEyNSwiZXhwIjoxNjY5MzExMTI1fQ.oXA4GMD7n4dlAuXAraUVHLN3AL-zixQcEtnJ9KFBFu8"+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      setLists(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
         <Navbar/>
         <Featured type={type}  setGenre={setGenre} />
         {lists.map((list) => (
          <List list={list} />
         ))}
    </div>
  );
};

export default Home;