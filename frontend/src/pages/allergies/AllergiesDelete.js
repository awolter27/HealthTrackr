import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function AllergiesDelete() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [allergy, setAllergy] = useState(null);

    const { id } = useParams();

    async function getAllergy() {
        try {
            let myAllergy = await fetch(`${URL}/allergies/${id}`);
            myAllergy = await myAllergy.json();
            setAllergy(myAllergy);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteMyAllergy() {
        try {
            await fetch(`${URL}/allergies/${id}`, {
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
                <h1 className='fs-1 fw-normal ms-sm-3 py-5 text-center'>Delete Allergy</h1>
                <div className='d-flex justify-content-center'>
                    <Card border="dark" className='mb-5 text-center' id='card'>
                        <Card.Header className='fs-3' id='card-header'>{allergy.name}</Card.Header>
                        <Card.Body>
                            <Card.Title className='fs-4'>Reaction</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{allergy.reaction}</Card.Text>
                            <Card.Title className='fs-4'>Notes</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{allergy.notes}</Card.Text>
                            <Card.Title className='fs-4'>Actions</Card.Title>
                            <div className='d-flex justify-content-center'>
                                <Link className='me-3' to={`/allergies`}>
                                    <button type="button" onClick={deleteMyAllergy} className='btn btn-danger text-white fs-5 fw-light px-3 py-1 border border-dark rounded-3'>Delete</button>
                                </Link>
                                <Link className='ms-3' to={`/allergies`}>
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
        getAllergy();
    }, []);

    return (
        <>
            {allergy ? loaded() : loading()}
        </>
    )
}

export default AllergiesDelete;