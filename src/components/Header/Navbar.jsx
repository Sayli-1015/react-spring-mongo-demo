// import { AiOutlineWarning } from "react-icons/ai";
// import { IoNotificationsCircleSharp } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";
// import { BsFillCaretDownFill } from "react-icons/bs";
// import { IconButton } from "../../atomicComponents";
// import styles from './Header.module.css'
import styles from './Header.module.css';
import { WarningAmberOutlined as WarningIcon } from '@mui/icons-material';
// import {CircleNotificationsIcon as NotificationIcon} from '@mui/icons-material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/tata-motors-logo.png';
import sidelogo from '../../assets/sidelogo.png';

const Navbar= () =>{
    return(
        <header>

            {/*older code starts here*/}

            <nav className={styles.navContainer}>
                <div className={styles.navLeftContainer}>
                    <img className={styles.navLogo} src={logo} alt="Tata Motors"/>
                </div>

                {/*<div className="nav-line" ></div>*/}

                <div className={styles.navRightContainer}>
                    <div className={styles.navIconContainer}>
                        <WarningIcon className={styles.iconDisable}/>
                        <CircleNotificationsIcon className={styles.iconDisable}/>
                        <AccountCircleIcon className={styles.profile} style={{ color: '#2E75B5' }} />
                        <ArrowDropDownIcon className={styles.downKey}/>
                    </div>
                    {/*<div className="nav-line"></div>*/}
                    <div className={styles.impsContainer}>
                        <img className={styles.navSideLogo} src={sidelogo} alt="IPMS-logo"/>
                    </div>
                </div>

            </nav>

            {/*older code ends here*/}


        </header>
    );
}

export default Navbar;