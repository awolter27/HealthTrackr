import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Container fluid>
                <Row className='py-5 justify-content-end'>
                    <Col sm={4} className='text-center'>
                        <h1 className='fs-1 fw-normal ms-sm-3'>Care Team</h1>
                    </Col>
                    <Col sm={4} className='text-center text-sm-end pe-sm-3'>
                        <Link to={'/careteam/new'}>
                            <button className='text-white fs-5 fw-light px-3 py-1 rounded-3' id='index-new-link'>Add Provider</button>
                        </Link>
                    </Col>
                </Row>
                {careteam.map((careteam, idx) => {
                    return (
                        <div className='d-flex justify-content-center'>
                            <Card key={idx} border="dark" className='mb-5 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>{careteam.title} {careteam.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Specialty</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{careteam.specialty}</Card.Text>
                                    <Card.Title className='fs-4'>Address</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{careteam.address}</Card.Text>
                                    <Card.Title className='fs-4'>Phone Number</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{careteam.phoneNumber}</Card.Text>
                                    <Card.Title className='fs-4'>Email</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{careteam.email}</Card.Text>
                                    <Card.Title className='fs-4'>Last Appointment</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{careteam.lastAppointment}</Card.Text>
                                    <Card.Title className='fs-4'>Next Appointment</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{careteam.nextAppointment}</Card.Text>
                                    <Card.Title className='fs-4'>Notes</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{careteam.notes}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/careteam/${careteam._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/careteam/${careteam._id}/delete`}>
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
            {careteam.length ? loaded(careteam) : loading()}
        </>
    )
}

export default CareTeamIndex;