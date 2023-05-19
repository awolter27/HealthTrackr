import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AppointmentsIndex() {
    const [appointments, setAppointments] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getAppointments() {
        try {
            let myAppointments = await fetch(`${URL}/appointments`);
            myAppointments = await myAppointments.json();
            setAppointments(myAppointments);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAppointments();
    }, []);

    function loaded(appointments) {
        return (
            <>
                <div className='index-container'>
                    <h1 className='index-header'>Appointments</h1>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>APPOINTMENT</th>
                                <th>PROVIDER</th>
                                <th>SPECIALTY</th>
                                <th>ADDRESS</th>
                                <th>DATE</th>
                                <th>REASON</th>
                                <th>NOTES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{appointment.nameOfAppointment}</td>
                                        <td>{appointment.title} {appointment.nameOfProvider}</td>
                                        <td>{appointment.specialty}</td>
                                        <td>{appointment.address}</td>
                                        <td>{appointment.date} {appointment.time}</td>
                                        <td>{appointment.reason}</td>
                                        <td>{appointment.notes}</td>
                                        <td>
                                            <Link className='index-edit-link' to={'/appointments/:id/edit'}>
                                                <h2 className='index-edit-text'>Edit</h2>
                                            </Link>
                                            <Link className='index-delete-link' to={'/appointments/:id/delete'}>
                                                <h2 className='index-delete-text'>Delete</h2>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='index-new-container'>
                        <Link className='index-new-link' to={'/appointments/new'}>
                            <h2 className='index-new-text'>Add Appointment</h2>
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
            {appointments.length ? loaded(appointments) : loading()}
        </>
    )
}

export default AppointmentsIndex;