import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VaccinationsIndex() {
    const [vaccinations, setVaccinations] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getVaccinations() {
        try {
            let myVaccinations = await fetch(`${URL}/vaccinations`);
            myVaccinations = await myVaccinations.json();
            setVaccinations(myVaccinations);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getVaccinations();
    }, []);

    function loaded(vaccinations) {
        return (
            <>
                <div className='index-container'>
                    <h1 className='index-header'>Vaccinations</h1>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>VACCINATION</th>
                                <th>MANUFACTURER</th>
                                <th>LOT NUMBER</th>
                                <th>DATE</th>
                                <th>NOTES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vaccinations.map((vaccination, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{vaccination.name}</td>
                                        <td>{vaccination.manufacturer}</td>
                                        <td>{vaccination.lotNumber}</td>
                                        <td>{vaccination.date}</td>
                                        <td>{vaccination.notes}</td>
                                        <td>
                                            <Link className='index-edit-link' to={'/vaccinations/:id/edit'}>
                                                <h2 className='index-edit-text'>Edit</h2>
                                            </Link>
                                            <Link className='index-delete-link' to={'/vaccinations/:id/delete'}>
                                                <h2 className='index-delete-text'>Delete</h2>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='index-new-container'>
                        <Link className='index-new-link' to={'/vaccinations/new'}>
                            <h2 className='index-new-text'>Add Vaccination</h2>
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
            {vaccinations.length ? loaded(vaccinations) : loading()}
        </>
    )
}

export default VaccinationsIndex;