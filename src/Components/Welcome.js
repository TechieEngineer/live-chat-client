import React from 'react'
import logo from '/home/philomath/Desktop/Visual /React/Try Messaging app/my-app/src/images/live-chat 52.png'


function Welcome() {
  return (
    <div className='welcome-container'>
      <img src={logo} alt="Logo" className='welcome-logo'/>
      <p>View and Text directly to people present in the Chat Rooms</p>
    </div>
  )
}

export default Welcome
