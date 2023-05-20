import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AllergiesIndex() {
    const [allergies, setAllergies] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getAllergies() {
        try {
            let myAllergies = await fetch(`${URL}/allergies`);
            myAllergies = await myAllergies.json();
            setAllergies(myAllergies);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllergies();
    }, []);

    function loaded(allergies) {
        return (
            <Container fluid>
                <Row className='py-5 justify-content-end'>
                    <Col sm={4} className='text-center'>
                        <h1 className='fs-1 fw-normal ms-sm-3'>Allergies</h1>
                    </Col>
                    <Col sm={4} className='text-center text-sm-end pe-sm-3'>
                        <Link to={'/allergies/new'}>
                            <button className='text-white fs-5 fw-light px-3 py-1 rounded-3' id='index-new-link'>Add Allergy</button>
                        </Link>
                    </Col>
                </Row>
                {allergies.map((allergy, idx) => {
                    return (
                        <div className='d-flex justify-content-center'>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>{allergy.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Reaction</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{allergy.reaction}</Card.Text>
                                    <Card.Title className='fs-4'>Notes</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{allergy.notes}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={'/allergies/:id/edit'}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={'/allergies/:id/delete'}>
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
            {allergies.length ? loaded(allergies) : loading()}
        </>
    )
}

export default AllergiesIndex;