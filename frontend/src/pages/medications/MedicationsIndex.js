import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MedicationsIndex() {
    const [medications, setMedications] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getMedications() {
        try {
            let myMedications = await fetch(`${URL}/medications`);
            myMedications = await myMedications.json();
            setMedications(myMedications);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMedications();
    }, []);

    function loaded(medications) {
        return (
            <>
                <div className='index-container'>
                    <h1 className='index-header'>Medications</h1>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>MEDICATION</th>
                                <th>DOSE</th>
                                <th>ROUTE</th>
                                <th>FREQUENCY</th>
                                <th>REASON</th>
                                <th>NOTES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medications.map((medication, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{medication.name}</td>
                                        <td>{medication.dose} {medication.unitOfMeasurement}</td>
                                        <td>{medication.route}</td>
                                        <td>{medication.frequency}</td>
                                        <td>{medication.reason}</td>
                                        <td>{medication.notes}</td>
                                        <td>
                                            <Link className='index-edit-link' to={'/medications/:id/edit'}>
                                                <h2 className='index-edit-text'>Edit</h2>
                                            </Link>
                                            <Link className='index-delete-link' to={'/medications/:id/delete'}>
                                                <h2 className='index-delete-text'>Delete</h2>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='index-new-container'>
                        <Link className='index-new-link' to={'/medications/new'}>
                            <h2 className='index-new-text'>Add Medication</h2>
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
            {medications.length ? loaded(medications) : loading()}
        </>
    )
}

export default MedicationsIndex;