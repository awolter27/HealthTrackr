import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HealthConditionsIndex() {
    const [healthconditions, setHealthConditions] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getHealthConditions() {
        try {
            let myHealthConditions = await fetch(`${URL}/healthconditions`);
            myHealthConditions = await myHealthConditions.json();
            setHealthConditions(myHealthConditions);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getHealthConditions();
    }, []);

    function loaded(healthconditions) {
        return (
            <Container fluid>
                <Row className='py-5 justify-content-end'>
                    <Col sm={4} className='text-center'>
                        <h1 className='fs-1 fw-normal ms-sm-3'>Health Conditions</h1>
                    </Col>
                    <Col sm={4} className='text-center text-sm-end pe-sm-3'>
                        <Link to={'/healthconditions/new'}>
                            <button className='text-white fs-5 fw-light px-3 py-1 rounded-3' id='index-new-link'>Add Health Condition</button>
                        </Link>
                    </Col>
                </Row>
                {healthconditions.map((healthcondition, idx) => {
                    return (
                        <div className='d-flex justify-content-center'>
                            <Card key={idx} border="dark" className='mb-5 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>{healthcondition.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Current</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{healthcondition.currentOrPast.current}</Card.Text>
                                    <Card.Title className='fs-4'>Past</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{healthcondition.currentOrPast.past}</Card.Text>
                                    <Card.Title className='fs-4'>Age At Diagnosis</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{healthcondition.ageOfDiagnosis} years old</Card.Text>
                                    <Card.Title className='fs-4'>Symptoms</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{healthcondition.symptoms}</Card.Text>
                                    <Card.Title className='fs-4'>Treatment</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{healthcondition.treatment}</Card.Text>
                                    <Card.Title className='fs-4'>Notes</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{healthcondition.notes}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/healthconditions/${healthconditions._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/healthconditions/${healthconditions._id}/delete`}>
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
            {healthconditions.length ? loaded(healthconditions) : loading()}
        </>
    )
}

export default HealthConditionsIndex;