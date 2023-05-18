import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SurgeriesIndex() {
    const [surgeries, setSurgeries] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getSurgeries() {
        try {
            let mySurgeries = await fetch(`${URL}/surgeries`);
            mySurgeries = await mySurgeries.json();
            setSurgeries(mySurgeries);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getSurgeries();
    }, []);

    function loaded(surgeries) {
        return (
            <>
                <div className='index-container'>
                    <h1 className='index-header'>Surgeries</h1>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>SURGERY</th>
                                <th>LOCATION</th>
                                <th>DATE</th>
                                <th>SURGEON</th>
                                <th>REASON</th>
                                <th>NOTES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {surgeries.map((surgery, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{surgery.name}</td>
                                        <td>{surgery.location}</td>
                                        <td>{surgery.date}</td>
                                        <td>{surgery.surgeon}</td>
                                        <td>{surgery.reason}</td>
                                        <td>{surgery.notes}</td>
                                        <td>
                                            <Link className='index-edit-link' to={'/surgeries/:id/edit'}>
                                                <h2 className='index-edit-text'>Edit</h2>
                                            </Link>
                                            <Link className='index-delete-link' to={'/surgeries/:id/delete'}>
                                                <h2 className='index-delete-text'>Delete</h2>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='index-new-container'>
                        <Link className='index-new-link' to={'/surgeries/new'}>
                            <h2 className='index-new-text'>Add Surgery</h2>
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
            {surgeries.length ? loaded(surgeries) : loading()}
        </>
    )
}

export default SurgeriesIndex;