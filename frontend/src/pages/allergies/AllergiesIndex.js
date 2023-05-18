import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AllergiesIndex() {
    const [allergies, setAllergies] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getAllergies() {
        try {
            let myAllergies = await fetch(`${URL}/allergies`);
            myAllergies = await myAllergies.json();
            setAllergies(myAllergies);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllergies();
    }, []);

    function loaded(allergies) {
        return (
            <>
                <div className='index-container'>
                    <h1 className='index-header'>Allergies</h1>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>ALLERGY</th>
                                <th>REACTION</th>
                                <th>NOTES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allergies.map((allergy, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{allergy.name}</td>
                                        <td>{allergy.reaction}</td>
                                        <td>{allergy.notes}</td>
                                        <td>
                                            <Link className='index-edit-link' to={'/allergies/:id/edit'}>
                                                <h2 className='index-edit-text'>Edit</h2>
                                            </Link>
                                            <Link className='index-delete-link' to={'/allergies/:id/delete'}>
                                                <h2 className='index-delete-text'>Delete</h2>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='index-new-container'>
                        <Link className='index-new-link' to={'/allergies/new'}>
                            <h2 className='index-new-text'>Add Allergy</h2>
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
            {allergies.length ? loaded(allergies) : loading()}
        </>
    )
}

export default AllergiesIndex;