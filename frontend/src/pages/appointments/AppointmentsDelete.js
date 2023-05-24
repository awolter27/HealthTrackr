import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function AppointmentsDelete() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [appointment, setAppointment] = useState(null);

    const { id } = useParams();

    async function getAppointment() {
        try {
            let myAppointment = await fetch(`${URL}/appointments/${id}`);
            myAppointment = await myAppointment.json();
            setAppointment(myAppointment);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteMyAppointment() {
        try {
            await fetch(`${URL}/appointments/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal ms-sm-3 py-5 text-center'>Delete Appointment</h1>
                <div className='d-flex justify-content-center'>
                    <Card border="dark" className='mb-5 text-center' id='card'>
                        <Card.Header className='fs-3' id='card-header'>{appointment.nameOfAppointment}</Card.Header>
                        <Card.Body>
                            <Card.Title className='fs-4'>Provider</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{appointment.title} {appointment.nameOfProvider}</Card.Text>
                            <Card.Title className='fs-4'>Specialty</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{appointment.specialty}</Card.Text>
                            <Card.Title className='fs-4'>Address</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{appointment.address}</Card.Text>
                            <Card.Title className='fs-4'>Date</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{appointment.date} {appointment.time}</Card.Text>
                            <Card.Title className='fs-4'>Reason</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{appointment.reason}</Card.Text>
                            <Card.Title className='fs-4'>Notes</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{appointment.notes}</Card.Text>
                            <Card.Title className='fs-4'>Actions</Card.Title>
                            <div className='d-flex justify-content-center'>
                                <Link className='me-3' to={`/appointments`}>
                                    <button type="button" onClick={deleteMyAppointment} className='btn btn-danger text-white fs-5 fw-light px-3 py-1 border border-dark rounded-3'>Delete</button>
                                </Link>
                                <Link className='ms-3' to={`/appointments`}>
                                    <button type="button" className='btn btn-secondary text-white fs-5 fw-light px-3 py-1 border border-dark rounded-3'>Cancel</button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        )
    }

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    useEffect(() => {
        getAppointment();
    }, []);

    return (
        <>
            {appointment ? loaded() : loading()}
        </>
    )
}

export default AppointmentsDelete;