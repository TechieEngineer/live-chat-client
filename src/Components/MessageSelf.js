import React from 'react'

function MessageSelf() {
  
  var props2 = {name: "You", message:"This is a sample message"}

  return (
    <div className='self-message-cotainer'>
      <div className="messagebox">
        <p>{props2.message}</p>
        <p className='self-timestamp'>12:00pm</p>
      </div>
    </div>
  )
}

export default MessageSelf
