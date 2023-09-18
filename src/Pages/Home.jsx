import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
const Home = () => {
    return(
        <>
            <div className="quality-container">
                <div className="home-icon-container">
                   <HomeRoundedIcon style={{ color: 'white' }}/>
                </div>
                <h1 className="quality-content">Quality</h1>
            </div>
            <div className="options-container">
            <div className="left-options-container">
                <p className="option-container-heading">SELECT</p>
                <div>
                    <p className="option-container-buttons">MASTER DATA</p>
                </div>
            </div>

            <div className="left-options-container">
                <p className="option-container-heading">ACT</p>
                <div className="option-container-buttons">PART FAMILY MASTER</div>
                <div className="option-container-buttons">BARCODE PATTERN MASTER</div>
            </div>
            <div className="right-options-container">
                <p className="option-container-heading">TOOLS</p>
                <div className="option-container-buttons">MASTER DATA QUALITY</div>
            </div>
            </div>
        </>
    );
}
export default Home;