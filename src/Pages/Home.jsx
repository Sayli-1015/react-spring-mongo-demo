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
            <div className="card-container">
            <div className="left-card-container">
                <p className="card-container-heading">SELECT</p>
                <div>
                    <p className="card-container-buttons">MASTER DATA</p>
                </div>
            </div>

            <div className="left-card-container">
                <p className="card-container-heading">ACT</p>
                <div className="card-container-buttons">PART FAMILY MASTER</div>
                <div className="card-container-buttons">BARCODE PATTERN MASTER</div>
            </div>
            <div className="right-card-container">
                <p className="card-container-heading">TOOLS</p>
                <div className="card-container-buttons">MASTER DATA QUALITY</div>
            </div>
            </div>
        </>
    );
}
export default Home;