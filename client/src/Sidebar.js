import React from "react";
import calendar from "./assets/calendar.png";
import chrome from "./assets/chrome.png";
import classroom from "./assets/classroom.png";
import drive from "./assets/drive.png";
import gmail from "./assets/gmail.png";
import photos from "./assets/photos.png";
import play from "./assets/play.png";
import sheets from "./assets/sheets.png";
import slides from "./assets/slides.png";
import youtube from "./assets/youtube.png";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="center">
        <div>
          <p className="title">
            <DashboardOutlinedIcon className="titleIcon" />
            <span>Google Apps</span>
          </p>
          <a href="https://www.google.com/" className="icon">
            <img src={chrome} alt="" />
            <span>Chrome</span>
          </a>
          <a href="https://www.youtube.com/" className="icon">
            <img src={youtube} alt="" />
            <span>Youtube</span>
          </a>
          <a href="https://play.google.com/" className="icon">
            <img src={play} alt="" />
            <span>Playstore</span>
          </a>
          <a href="https://mail.google.com/" className="icon">
            <img src={gmail} alt="" />
            <span>Gmail</span>
          </a>
          <a href="https://docs.google.com/spreadsheets/" className="icon">
            <img src={sheets} alt="" />
            <span>Sheets</span>
          </a>
          <a href="https://drive.google.com/" className="icon">
            <img src={drive} alt="" />
            <span>Drive</span>
          </a>

          <a href="https://docs.google.com/presentation/" className="icon">
            <img src={slides} alt="" />
            <span>Slides</span>
          </a>

          <a href="https://calendar.google.com/" className="icon">
            <img src={calendar} alt="" />
            <span>Calendar</span>
          </a>
          <a href="https://photos.google.com/" className="icon">
            <img src={photos} alt="" />
            <span>Photos</span>
          </a>
          <a href="https://classroom.google.com/" className="icon">
            <img src={classroom} alt="" />
            <span>Classroom</span>
          </a>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
