import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import './Quality.css';


import tool from '../../assets/Icon metro-tools.png'

import React from "react";

const Quality = () => {

    return(
        <>
            <div className="quality-container">
                <div className="home-icon-container">
                    <HomeRoundedIcon />
                </div>
                <h1 className="quality-content">Quality</h1>
            </div>
            <div className="card-container">
                <div className="left-card">
                    <p className="card-heading">SELECT</p>
                    <div>
                        <p className="card-buttons">MASTER DATA</p>
                    </div>
                </div>

                <div className="left-card">
                    <p className="card-heading">ACT</p>
                    <div className="card-buttons">PART FAMILY MASTER</div>
                    <div className="card-buttons">BARCODE PATTERN MASTER</div>
                </div>
                <div className="right-card">
                    <p className="card-heading">TOOLS</p>
                    <div className="card-buttons">MASTER DATA QUALITY
                        <img className="toolImg"  src= {tool} alt="toolimg"/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Quality;