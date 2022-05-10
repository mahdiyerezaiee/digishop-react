import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import {signOut} from "firebase/auth";
import {auth} from "../../../firebase/firebase";

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      {/*<div className="top">*/}
      {/*  <Link to="/admin" style={{ textDecoration: "none" }}>*/}
      {/*    <span className="logo">panel admin</span>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<hr />*/}
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>

          <li>
            {/*<DashboardIcon className="icon" />*/}
            <span>Dashboard</span>
          </li>
          </Link>

          <p className="title">LISTS</p>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              {/*<StoreIcon className="icon" />*/}
              <span>Products</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            {/*<AccountCircleOutlinedIcon className="icon" />*/}


            <span>Profile</span>
          </li>
         </Link>
          <li>
            {/*<ExitToAppIcon className="icon" />*/}
            <span onClick={() => signOut(auth)}>Logout</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
