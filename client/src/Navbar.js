import React, { useState } from 'react'
import logo from "./assets/docs.png"
import pic from "./assets/pic.jpg"
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import Sidebar from './Sidebar';

const Navbar = () => {

    const [open, setOpen] = useState(false)

const handleClick = () => {
    alert("Copy & Share the URL Link!")
}

  return (
    <div className="navbar">
        <div className="left">
            <img src={logo} alt="" onClick={()=> setOpen(!open)} />
            {open && <Sidebar/>}
            <div className="display">
                <div className="text">
                    <div>Untilted document</div>
                </div>
                <div className="spans">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Insert</span>
                    <span>Format</span>
                    <span>Tools</span>
                    <span>Extensions</span>
                    <span>Help</span>
                </div>
            </div>
            </div>
        <div className="right">
            <HistoryOutlinedIcon className='icon rewind'/>
            <CommentOutlinedIcon className='icon chat'/>
            <VideocamOutlinedIcon className='icon video'/>
            <span onClick={handleClick}>Share</span>
            <img src={pic} alt=""  className="icon3" />
        </div>
    </div>
  )
}

export default Navbar