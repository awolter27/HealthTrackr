import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HospitalizationsIndex() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [hospitalizations, setHospitalizations] = useState([]);

    async function getHospitalizations() {
        try {
            let myHospitalizations = await fetch(`${URL}/hospitalizations`);
            myHospitalizations = await myHospitalizations.json();
            setHospitalizations(myHospitalizations);
        } catch (err) {
            console.log(err);
        }
    }

    function loaded(hospitalizations) {
        return (
            <Container fluid>
                <Row className='py-5 justify-content-end'>
                    <Col sm={4} className='text-center'>
                        <h1 className='fs-1 fw-normal ms-sm-3'>Hospitalizations</h1>
                    </Col>
                    <Col sm={4} className='text-center text-sm-end pe-sm-3'>
                        <Link to={'/hospitalizations/new'}>
                            <button className='text-white fs-5 fw-light px-3 py-1 rounded-3' id='index-new-link'>Add Hospitalization</button>
                        </Link>
                    </Col>
                </Row>
                {hospitalizations.map((hospitalization, idx) => {
                    return (
                        <div className='d-flex justify-content-center'>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>{hospitalization.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Address</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{hospitalization.location} {hospitalization.nameOfProvider}</Card.Text>
                                    <Card.Title className='fs-4'>Dates</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{hospitalization.dates}</Card.Text>
                                    <Card.Title className='fs-4'>Reason</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{hospitalization.reason}</Card.Text>
                                    <Card.Title className='fs-4'>Notes</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{hospitalization.notes}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/hospitalizations/${hospitalization._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/hospitalizations/${hospitalization._id}/delete`}>
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

    useEffect(() => {
        getHospitalizations();
    }, []);

    return (
        <>
            {hospitalizations.length ? loaded(hospitalizations) : loading()}
        </>
    )
}

export default HospitalizationsIndex;