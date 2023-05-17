import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AppointmentsIndex() {
    const [appointments, setAppointments] = useState([]);

    async function getAppointments() {
        try {
            let myAppointments = await fetch('http://localhost:4000/appointments');
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
                {appointments.map((appointment, idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/appointments/${appointment._id}`}>
                                <h2>Appointment: {appointment.nameOfAppointment}</h2>
                            </Link>
                            <h2>Provider: {appointment.title} {appointment.nameOfProvider}</h2>

                            <h2>Specialty: {appointment.specialty}</h2>
                            <h2>Address: {appointment.address}</h2>
                            <h2>Date: {appointment.date}</h2>
                            <h2>Time: {appointment.time}</h2>
                            <h2>Reason: {appointment.reason}</h2>
                            <h2>Notes: {appointment.notes}</h2>
                        </div>
                    )
                })}
                <Link to={`/appointments/new`}>
                    <h2>new</h2>
                </Link>
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