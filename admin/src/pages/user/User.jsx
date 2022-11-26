import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons"
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEdAMzSoTSRIg/profile-displayphoto-shrink_800_800/0/1649517237797?e=2147483647&v=beta&t=3QqPoE291MW4Fc52AlA62lpbipiF0bhLYXiWDH3wtQQ"
                        alt=""
                        className="userShowImg"
                       /> 
                       <div className="userShowTopTitle">
                        <span className="userShowUsername">ChandraKant Dubey</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">Chandrack17</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userShowInfoTitle">05.08.1997</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userShowInfoTitle">+91 123 456 67</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">Chandrack17@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userShowInfoTitle">Uttar Pradesh | India</span>
                    </div>
                  </div> 
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                 type="text"
                                 placeholder="chandrack17"
                                 className="userUpdateInput"
                                /> 
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input 
                                 type="text"
                                 placeholder="Chandrakant Dubey"
                                 className="userUpdateInput"
                                /> 
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input 
                                 type="text"
                                 placeholder="chandrack17@gmail.com"
                                 className="userUpdateInput"
                                /> 
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input 
                                 type="text"
                                 placeholder="+91 123 456 67"
                                 className="userUpdateInput"
                                /> 
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input 
                                 type="text"
                                 placeholder="Uttar Pradesh | India"
                                 className="userUpdateInput"
                                /> 
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                 className="userUpdateImg"
                                 src="https://media-exp1.licdn.com/dms/image/C4E03AQEdAMzSoTSRIg/profile-displayphoto-shrink_800_800/0/1649517237797?e=2147483647&v=beta&t=3QqPoE291MW4Fc52AlA62lpbipiF0bhLYXiWDH3wtQQ"
                                 alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label> 
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
