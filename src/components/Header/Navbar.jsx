// import { AiOutlineWarning } from "react-icons/ai";
// import { IoNotificationsCircleSharp } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";
// import { BsFillCaretDownFill } from "react-icons/bs";
// import { IconButton } from "../../atomicComponents";
// import styles from './Header.module.css'
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

            <nav className="nav-container">
                <div className="nav-left-container">
                    <img className="nav-logo" src={logo} alt="Tata Motors"/>
                </div>

                {/*<div className="nav-line" ></div>*/}

                <div className="nav-right-container">
                    <div className="nav-icon-container">
                        <WarningIcon className="icon-disable"/>
                        <CircleNotificationsIcon className="icon-disable"/>
                        <AccountCircleIcon className="profile" style={{ color: '#2E75B5' }} />
                        <ArrowDropDownIcon className="down-key"/>
                    </div>
                    {/*<div className="nav-line"></div>*/}
                    <div className="imps-container">
                        <img className="nav-side-logo" src={sidelogo} alt="IPMS-logo"/>
                    </div>
                </div>

            </nav>

            {/*older code ends here*/}

            {/*------------*/}

            {/*header container starts*/}

            {/*<div className={styles.header}>*/}
            {/*    /!*left header container*!/*/}
            {/*    <div className={styles.leftContainer}>*/}
            {/*        <img className={styles.logo} src={logo} alt="Tata Motors"/>*/}
            {/*    </div>*/}
                {/*left header container ends here*/}

                {/*right header container starts here*/}
                {/*<div className={styles.rightContainer}>*/}

                    {/*icon container starts here*/}
                    {/*<div className={`${styles["topIcons"]} ${styles[theme]}`}>*/}
                    {/*    <AiOutlineWarning className={styles.icDesable} />*/}
                    {/*    <IoNotificationsCircleSharp className={styles.icDesable} />*/}
                    {/*    <FaUserCircle />*/}
                    {/*    <IconButton*/}
                    {/*        className={styles.iconButton}*/}
                    {/*        // ref={profileRef}*/}
                    {/*        // onClick={() => setShowProfile(true)}*/}
                    {/*        >*/}
                    {/*        <BsFillCaretDownFill*/}
                    {/*            className={`${styles["down-key"]} ${styles[theme]}`}/>*/}
                    {/*    </IconButton>*/}
                    {/*</div>*/}
                    {/*icon container ends here*/}


                    {/*side logo container starts here*/}
                    {/*<div>*/}

                    {/*</div>*/}
                    {/*side logo container ends here*/}

                {/*</div>*/}
                {/*right header container ends here*/}

            {/*</div>*/}

            {/*header container ends*/}

        </header>
    );
}

export default Navbar;