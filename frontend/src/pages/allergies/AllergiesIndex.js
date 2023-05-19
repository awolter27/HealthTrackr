import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                <h1 className='index-header'>Allergies</h1>
                {allergies.map((allergy, idx) => {
                    return (
                        <Card key={idx}>
                            <Card.Header as="h5">{allergy.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>Reaction</Card.Title>
                                <Card.Text>{allergy.reaction}</Card.Text>
                                <Card.Title>Notes</Card.Title>
                                <Card.Text>{allergy.notes}</Card.Text>
                                <Card.Title>Actions</Card.Title>
                                <Link className='index-edit-link' to={'/allergies/:id/edit'}>
                                    <h2 className='index-edit-text'>Edit</h2>
                                </Link>
                                <Link className='index-delete-link' to={'/allergies/:id/delete'}>
                                    <h2 className='index-delete-text'>Delete</h2>
                                </Link>
                            </Card.Body>
                        </Card>
                    )
                })}
                <Link className='index-new-link' to={'/allergies/new'}>
                    <h2 className='index-new-text'>Add Allergy</h2>
                </Link>
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