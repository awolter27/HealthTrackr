import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FamilyHistoryIndex() {
    const [familyhistory, setFamilyHistory] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getFamilyHistory() {
        try {
            let myFamilyHistory = await fetch(`${URL}/familyhistory`);
            myFamilyHistory = await myFamilyHistory.json();
            setFamilyHistory(myFamilyHistory);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getFamilyHistory();
    }, []);

    function loaded(familyhistory) {
        return (
            <Container fluid>
                <Row className='py-5 justify-content-end'>
                    <Col sm={4} className='text-center'>
                        <h1 className='fs-1 fw-normal ms-sm-3'>Family History</h1>
                    </Col>
                    <Col sm={4} className='text-center text-sm-end pe-sm-3'>
                        <Link to={'/familyhistory/new'}>
                            <button className='text-white fs-5 fw-light px-3 py-1 rounded-3' id='index-new-link'>Add Family History</button>
                        </Link>
                    </Col>
                </Row>
                {familyhistory.map((familyhistory, idx) => {
                    return (
                        <div className='d-flex justify-content-center'>
                            <Card key={idx} border="dark" className='mb-5 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>{familyhistory.relationship}</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Living</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{familyhistory.living.living}</Card.Text>
                                    <Card.Title className='fs-4'>Age</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{familyhistory.living.age} years old</Card.Text>
                                    <Card.Title className='fs-4'>Deceased</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{familyhistory.deceased.deceased}</Card.Text>
                                    <Card.Title className='fs-4'>Age At Death</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{familyhistory.deceased.ageAtDeath} years old</Card.Text>
                                    <Card.Title className='fs-4'>Health Condition</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{familyhistory.healthCondition}</Card.Text>
                                    <Card.Title className='fs-4'>Age At Diagnosis</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{familyhistory.ageOfDiagnosis} years old</Card.Text>
                    
                                    <Card.Title className='fs-4'>Notes</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{familyhistory.notes}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={'/familyhistory/:id/edit'}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={'/familyhistory/:id/delete'}>
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
            {familyhistory.length ? loaded(familyhistory) : loading()}
        </>
    )
}

export default FamilyHistoryIndex;