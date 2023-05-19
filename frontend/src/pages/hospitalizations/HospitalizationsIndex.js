import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HospitalizationsIndex() {
    const [hospitalizations, setHospitalizations] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getHospitalizations() {
        try {
            let myHospitalizations = await fetch(`${URL}/hospitalizations`);
            myHospitalizations = await myHospitalizations.json();
            setHospitalizations(myHospitalizations);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getHospitalizations();
    }, []);

    function loaded(hospitalizations) {
        return (
            <>
                <div className='index-container'>
                    <h1 className='index-header'>Hospitalizations</h1>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>HOSPITAL</th>
                                <th>ADDRESS</th>
                                <th>DATES</th>
                                <th>reason</th>
                                <th>NOTES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hospitalizations.map((hospitalization, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{hospitalization.name}</td>
                                        <td>{hospitalization.location}</td>
                                        <td>{hospitalization.dates}</td>
                                        <td>{hospitalization.reason}</td>
                                        <td>{hospitalization.notes}</td>
                                        <td>
                                            <Link className='index-edit-link' to={'/hospitalizations/:id/edit'}>
                                                <h2 className='index-edit-text'>Edit</h2>
                                            </Link>
                                            <Link className='index-delete-link' to={'/hospitalizations/:id/delete'}>
                                                <h2 className='index-delete-text'>Delete</h2>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='index-new-container'>
                        <Link className='index-new-link' to={'/hospitalizations/new'}>
                            <h2 className='index-new-text'>Add Hospitalization</h2>
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
            {hospitalizations.length ? loaded(hospitalizations) : loading()}
        </>
    )
}

export default HospitalizationsIndex;