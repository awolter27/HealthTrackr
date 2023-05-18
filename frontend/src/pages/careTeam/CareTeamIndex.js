import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CareTeamIndex() {
    const [careteam, setCareTeam] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getCareTeam() {
        try {
            let myCareTeam = await fetch(`${URL}/careteam`);
            myCareTeam = await myCareTeam.json();
            setCareTeam(myCareTeam);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCareTeam();
    }, []);

    function loaded(careteam) {
        return (
            <>
                <div className='index-container'>
                    <h1 className='index-header'>Care Team</h1>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>PROVIDER</th>
                                <th>SPECIALTY</th>
                                <th>ADDRESS</th>
                                <th>PHONE NUMBER</th>
                                <th>EMAIL</th>
                                <th>LAST APPOINTMENT</th>
                                <th>NEXT APPOINTMENT</th>
                                <th>NOTES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {careteam.map((careteam, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{careteam.title} {careteam.name}</td>
                                        <td>{careteam.specialty}</td>
                                        <td>{careteam.address}</td>
                                        <td>{careteam.phoneNumber}</td>
                                        <td>{careteam.email}</td>
                                        <td>{careteam.lastAppointment}</td>
                                        <td>{careteam.nextAppointment}</td>
                                        <td>{careteam.notes}</td>
                                        <td>
                                            <Link className='index-edit-link' to={'/careteam/:id/edit'}>
                                                <h2 className='index-edit-text'>Edit</h2>
                                            </Link>
                                            <Link className='index-delete-link' to={'/careteam/:id/delete'}>
                                                <h2 className='index-delete-text'>Delete</h2>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='index-new-container'>
                        <Link className='index-new-link' to={'/careteam/new'}>
                            <h2 className='index-new-text'>Add Provider</h2>
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
            {careteam.length ? loaded(careteam) : loading()}
        </>
    )
}

export default CareTeamIndex;