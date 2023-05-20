import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Container fluid>
                <Row className='py-5 justify-content-end'>
                    <Col sm={4} className='text-center'>
                        <h1 className='fs-1 fw-normal ms-sm-3'>Appointments</h1>
                    </Col>
                    <Col sm={4} className='text-center text-sm-end pe-sm-3'>
                        <Link to={'/appointments/new'}>
                            <button className='text-white fs-5 fw-light px-3 py-1 rounded-3' id='index-new-link'>Add Appointment</button>
                        </Link>
                    </Col>
                </Row>
                {appointments.map((appointment, idx) => {
                    return (
                        <div className='d-flex justify-content-center'>
                            <Card key={idx} border="dark" className='mb-5 text-center' id='card'>
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
                                        <Link className='me-3' to={'/appointments/:id/edit'}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={'/appointments/:id/delete'}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </Container>
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