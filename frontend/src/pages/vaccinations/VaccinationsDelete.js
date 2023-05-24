import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function VaccinationsDelete() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [vaccination, setVaccination] = useState(null);

    const { id } = useParams();

    async function getVaccination() {
        try {
            let myVaccination = await fetch(`${URL}/vaccinations/${id}`);
            myVaccination = await myVaccination.json();
            setVaccination(myVaccination);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteMyVaccination() {
        try {
            await fetch(`${URL}/vaccinations/${id}`, {
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
                <h1 className='fs-1 fw-normal ms-sm-3 py-5 text-center'>Delete Vaccination</h1>
                <div className='d-flex justify-content-center'>
                    <Card border="dark" className='mb-4 text-center' id='card'>
                        <Card.Header className='fs-3' id='card-header'>{vaccination.name}</Card.Header>
                        <Card.Body>
                            <Card.Title className='fs-4'>Manufacturer</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{vaccination.manufacturer}</Card.Text>
                            <Card.Title className='fs-4'>Lot Number</Card.Title>
                            <Card.Text className='fs-5 fw-light'>#{vaccination.lotNumber}</Card.Text>
                            <Card.Title className='fs-4'>Date Administered</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{vaccination.date}</Card.Text>
                            <Card.Title className='fs-4'>Notes</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{vaccination.notes}</Card.Text>
                            <Card.Title className='fs-4'>Actions</Card.Title>
                            <div className='d-flex justify-content-center'>
                                <Link className='me-3' to={`/vaccinations`}>
                                    <button type="button" onClick={deleteMyVaccination} className='btn btn-danger text-white fs-5 fw-light px-3 py-1 border border-dark rounded-3'>Delete</button>
                                </Link>
                                <Link className='ms-3' to={`/vaccinations`}>
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
        getVaccination();
    }, []);

    return (
        <>
            {vaccination ? loaded() : loading()}
        </>
    )
}

export default VaccinationsDelete;