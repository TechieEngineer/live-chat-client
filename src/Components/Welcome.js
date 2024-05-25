import React from "react";
import logo from "../Images/live-chat_512px.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <b>Hi , {userData.data.name} 👋</b>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
}

export default Welcome;



// import React from 'react'
// import logo from '/home/philomath/Desktop/Visual /React/Try Messaging app/live-chat-client/src/images/live-chat 52.png'


// function Welcome() {
//   return (
//     <div className='welcome-container'>
//       <img src={logo} alt="Logo" className='welcome-logo'/>
//       <p>View and Text directly to people present in the Chat Rooms</p>
//     </div>
//   )
// }

// export default Welcome
