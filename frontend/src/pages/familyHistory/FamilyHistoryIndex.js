import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function FamilyHistoryIndex() {
    const [familyhistory, setFamilyHistory] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getFamilyHistory() {
        try {
            let myFamilyHistory = await fetch(`${URL}/familyhistory`);
            myFamilyHistory = await myFamilyHistory.json();
            setFamilyHistory(myFamilyHistory);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getFamilyHistory();
    }, []);

    function loaded(familyhistory) {
        return (
            <>
                <div className='index-container'>
                    <h1 className='index-header'>Family History</h1>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>RELATIONSHIP</th>
                                <th>LIVING</th>
                                <th>AGE</th>
                                <th>DECEASED</th>
                                <th>AGE AT DEATH</th>
                                <th>HEALTH CONDITION</th>
                                <th>AGE OF DIAGNOSIS</th>
                                <th>NOTES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {familyhistory.map((familyhistory, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{familyhistory.relationship}</td>
                                        <td>{familyhistory.living.living}</td>
                                        <td>{familyhistory.living.age}</td>
                                        <td>{familyhistory.deceased.deceased}</td>
                                        <td>{familyhistory.deceased.ageAtDeath}</td>
                                        <td>{familyhistory.healthCondition}</td>
                                        <td>{familyhistory.ageOfDiagnosis}</td>
                                        <td>{familyhistory.notes}</td>
                                        <td>
                                            <Link className='index-edit-link' to={'/familyhistory/:id/edit'}>
                                                <h2 className='index-edit-text'>Edit</h2>
                                            </Link>
                                            <Link className='index-delete-link' to={'/familyhistory/:id/delete'}>
                                                <h2 className='index-delete-text'>Delete</h2>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='index-new-container'>
                        <Link className='index-new-link' to={'/familyhistory/new'}>
                            <h2 className='index-new-text'>Add Family History</h2>
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            {familyhistory.length ? loaded(familyhistory) : loading()}
        </>
    )
}

export default FamilyHistoryIndex;