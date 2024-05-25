import React, { createContext, useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux"; old code with dispatch import

export const myContext = createContext();
function MainContainer() {
  // const dispatch = useDispatch(); code with dispatch
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);

  return (
    <div className={"main-container" + (lightTheme ? "" : " dark")}>
      <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar />
        <Outlet />
      </myContext.Provider>
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Users /> */}
      {/* <Groups /> */}
    </div>
  );
}

export default MainContainer;








// import React, {useState} from 'react'
// import './myStyles.css'
// import Sidebar from './Sidebar'
// import ChatArea from './ChatArea'
// import Welcome from './Welcome';
// import CreateGroups from './CreateGroups';
// import Users from './Users';
// import Groups from './Groups';
// import { Outlet } from 'react-router-dom';

// function MainContainer() {
           
//   return (
//     <div className='main-container'>
//       <Sidebar/>
//       <Outlet/>
//       {/* <Welcome/> */}
//       {/* <CreateGroups/> */}
//       {/* <ChatArea props={conversations[0]}/> */}
//       {/* <Users/> */}
//       {/* <Groups/> */}
//     </div>
//   )
// }

// export default MainContainer
