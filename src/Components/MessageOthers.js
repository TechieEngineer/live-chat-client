import React from "react";
import "./myStyles.css";
import { useSelector } from "react-redux";
// import{ useDispatch, useSelector } from "react-redux"; old code with dispatch imported

function MessageOthers({ props }) {
  // const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  // console.log("message others : ", props);
  return (
    <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
      <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>
          {props.sender.name[0]}
        </p>
        <div className={"other-text-content" + (lightTheme ? "" : " dark")}>
          <p className={"con-title" + (lightTheme ? "" : " dark")}>
            {props.sender.name}
          </p>
          <p className={"con-lastMessage" + (lightTheme ? "" : " dark")}>
            {props.content}
          </p>
          {/* <p className="self-timeStamp">12:00am</p> */}
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;








// import React from 'react';
// import "./myStyles.css"

// function MessageOthers() {
//   var props1 = { name: "RandomUser", message: "This is a sample Message"};
//   return (
//     <div className='other-message-container'>
//       <div className="conversation-container">
//         <p className='con-icon'>{props1.name[0]}</p>
//         <div className="other-text-content">
//         <p className='con-title'>{props1.name}</p>
//         <p className='con-lastMessage'>{props1.message}</p>
//         <p className='self-timestamp'>12:00am</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MessageOthers
