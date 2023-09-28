import arrow from '../../assets/arrow_back_black_24dp.png';
import './PFMaster.scss';
import '../../styles/colorCodes.scss';
import {useEffect, useState} from "react";
import Modal from "../AddPF/AddPF.jsx";
import { Virtuoso } from 'react-virtuoso';
import SuccessModal from "../SuccessModal/SuccessModal.jsx";




const PFList = () => {
    const [showModal, setShowModal] = useState(false);

    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(true);





    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);


    };





    const handleAddData = (newData) => {

        setTableData([...tableData, newData]);
    };




    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:8080/PFMaster');
                const data = await response.json();

                setTableData(data);


                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData()



    }, []);




    return (
        <>
            <div className="backTab">
                <div className="backButton">
                    <img className="backArrow" src={arrow} alt="backarrow"/>

                </div>
                <h1>Part Family Master List</h1>
            </div>

            <div className="main-tab">
                <div className="partFamilyTab">
                       <h2>Part Family Master</h2>
                       <div className="partFamilyTabCounter">{tableData.length}</div>
                </div>
                <div className="whiteTab"></div>

            </div>
            <div className="displayTable">
                {loading? (
                    <p>Loading ......</p>
                    ) : (
                    <Virtuoso
                        style={{ height: '100%', width: '100%' }}
                        totalCount={tableData.length + 1} //
                        itemContent={(index) => {
                            if (index === 0) {
                                // Header row
                                return (
                                    <div className="header-row" key={index}>
                                        <div className="header-cell">Part Family Name</div>
                                        <div className="header-cell">Applicable Shop Types</div>
                                        <div className="header-cell">Criticality</div>
                                        <div className="header-cell">Updated By</div>
                                        <div className="header-cell">Updated On</div>
                                    </div>
                                );
                            }

                            const item = tableData[index - 1];
                            const dateObject = new Date(item.lastUpdatedOn);
                            const timeString = dateObject.toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true,
                            });
                            const shopTypes = item.applicableShopTypes ? item.applicableShopTypes.join(', ') : '';
                            const criticalities = item.criticality ? item.criticality.join(', ') : '';
                            return (
                                <div className="table-row" key={index}>
                                    <div className="table-cell">{item.partFamilyName}</div>
                                    <div className="table-cell">{shopTypes}</div>
                                    <div className="table-cell">{criticalities}</div>
                                    <div className="table-cell">{item.updatedBy}</div>
                                    <div className="table-cell">

                                        {timeString}{' '}
                                        {dateObject.toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                        })}
                                    </div>
                                </div>
                            );
                        }}
                    />
                )}
            </div>

            <div className="functionButtons">
                <button className="customiseButton">CUSTOMISE TABLE</button>
                <button className="deleteButton">DELETE</button>
                <button className="editButton">EDIT</button>
                <div className="add">
                    <button className="addButton" onClick={openModal}>ADD PART FAMILY</button>
                    <Modal showModal={showModal} closeModal={closeModal} onAdd={handleAddData} />

                </div>
            </div>

        </>
    );
}

export default PFList;

