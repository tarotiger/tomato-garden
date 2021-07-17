import React from 'react'
import Chat from '../chat/Chat'
import avatar from '../../assets/avatar1.png'
// import checkbox from '../../assets/checkbox.png'

import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='avatar'>
        <img src={avatar} alt='avatar 1' height='300rem' width='auto' />
        <h1>Anonymous Hippo</h1>
      </div>
      {/* <h2>Todo</h2>
      <div className='todo'>
        <img className='checkbox' src={checkbox} alt='checkbox' height='15px' width='15px' />
        <p>complete my math homework</p>
      </div> */}
      <div>
        <h2>Chat</h2>
        <Chat />
      </div>
    </div >
  )
}

export default Sidebar
