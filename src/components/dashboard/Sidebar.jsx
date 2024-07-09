"use client"
import Link from "next/link";

const Sidebar = () => {
  return (
    <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            HLS <sup>new 2024</sup>
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" href="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-list-ul"></i>
            <span>Video</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Video:</h6>
              <Link className="collapse-item" href="/dashboard/video">
                <i className="fas fa-film"></i> Videos List
              </Link>
              <Link className="collapse-item" href="/dashboard/video/upload">
                <i className="fas fa-cloud-upload-alt"></i> UPLOAD
              </Link>
              <Link className="collapse-item" href="/dashboard/video/googledrive">
                <i className="fab fa-google-drive"></i> Google Drive
              </Link>
              <Link className="collapse-item" href="/dashboard/video/mp4">
                <i className="far fa-file-video"></i> MP4
              </Link>
              <Link className="collapse-item" href="/dashboard/video/m3u8">
                <i className="far fa-file-video"></i> M3U8
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#ServerPages"
            aria-expanded="true"
            aria-controls="ServerPages"
          >
            <i className="fas fa-server"></i>
            <span>Server Process</span>
          </a>
          <div
            id="ServerPages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Server Screens:</h6>
              <Link className="collapse-item" href="/dashboard/server/add">
                <i className="fas fa-plus-circle"></i> Add New
              </Link>
              <Link className="collapse-item" href="/dashboard/server">
                <i className="fas fa-server"></i> Server List
              </Link>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider" />

        <li className="nav-item">
          <a className="nav-link" href="./google-drive">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Google Drive</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#settingPages"
            aria-expanded="true"
            aria-controls="settingPages"
          >
            <i className="fas fa-cog"></i>
            <span>Setting</span>
          </a>
          <div
            id="settingPages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Server Screens:</h6>
              <Link className="collapse-item" href="/dashboard/setting">
                <i className="fas fa-plus-circle"></i> Domain
              </Link>
              <a className="collapse-item" href="./setting-advertising">
                <i className="fas fa-plus-circle"></i>
                Advertising
              </a>
              <Link className="collapse-item" href="/dashboard/setting/player">
                <i className="fas fa-server"></i> Player
              </Link>
              <a className="collapse-item" href="./setting-google-drive">
                <i className="fas fa-server"></i> Google Drive
              </a>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
  );
};

export default Sidebar;
