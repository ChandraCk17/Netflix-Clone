import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers:  {
                        token:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjdjNWE4MTg0MTBjZTczYzU5MmQxZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTQ2MDQ2OSwiZXhwIjoxNjY5ODkyNDY5fQ.XiIiilmh6VmYROyuosCgWpExPEiK8UiergE3x2VJ9oM",
                    },
                });
                setNewUsers(res.data);
            }catch(err) {
                console.log(err);
            }
        };
        getNewUsers();
    }, []);

  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            {newUsers.map((user) => ( 
            <li className="widgetSmListItem">
                <img 
                    src={
                        user.profilePic || 
                        "https://highxtar.com/wp-content/uploads/2022/09/highxtar-este-es-el-icono-de-perfil-de-netflix-mas-utilizado-destacada.jpg"
                }
                alt=""
                className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        ))}
        </ul>
    </div>
  );
}
