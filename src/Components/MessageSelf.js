import React from "react";

function MessageSelf({ props }) {
  // console.log("Message self Prop : ", props);
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p style={{ color: "black" }}>{props.content}</p>
        {/* <p className="self-timeStamp" style={{ color: "black" }}>
          12:00am
        </p> */}
      </div>
    </div>
  );
}

export default MessageSelf;








// import React from 'react'

// function MessageSelf() {
  
//   var props2 = {name: "You", message:"This is a sample message"}

//   return (
//     <div className='self-message-cotainer'>
//       <div className="messagebox">
//         <p>{props2.message}</p>
//         <p className='self-timestamp'>12:00pm</p>
//       </div>
//     </div>
//   )
// }

// export default MessageSelf
