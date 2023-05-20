import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MedicationsIndex() {
    const [medications, setMedications] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getMedications() {
        try {
            let myMedications = await fetch(`${URL}/medications`);
            myMedications = await myMedications.json();
            setMedications(myMedications);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMedications();
    }, []);

    function loaded(medications) {
        return (
            <Container fluid>
                <Row className='py-5 justify-content-end'>
                    <Col sm={4} className='text-center'>
                        <h1 className='fs-1 fw-normal ms-sm-3'>Medications</h1>
                    </Col>
                    <Col sm={4} className='text-center text-sm-end pe-sm-3'>
                        <Link to={'/medications/new'}>
                            <button className='text-white fs-5 fw-light px-3 py-1 rounded-3' id='index-new-link'>Add Medication</button>
                        </Link>
                    </Col>
                </Row>
                {medications.map((medication, idx) => {
                    return (
                        <div className='d-flex justify-content-center'>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>{medication.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Dose</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{medication.dose} {medication.unitOfMeasurement}</Card.Text>
                                    <Card.Title className='fs-4'>Route</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{medication.route}</Card.Text>
                                    <Card.Title className='fs-4'>Frequency</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{medication.frequency}</Card.Text>
                                    <Card.Title className='fs-4'>Reason</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{medication.reason}</Card.Text>
                                    <Card.Title className='fs-4'>Notes</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{medication.notes}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/medications/${medications._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/medications/${medications._id}/delete`}>
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
            {medications.length ? loaded(medications) : loading()}
        </>
    )
}

export default MedicationsIndex;