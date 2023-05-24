import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function MedicationsDelete() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [medication, setMedication] = useState(null);

    const { id } = useParams();

    async function getMedication() {
        try {
            let myMedication = await fetch(`${URL}/medications/${id}`);
            myMedication = await myMedication.json();
            setMedication(myMedication);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteMyMedication() {
        try {
            await fetch(`${URL}/medications/${id}`, {
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
                <h1 className='fs-1 fw-normal ms-sm-3 py-5 text-center'>Delete Medication</h1>
                <div className='d-flex justify-content-center'>
                    <Card border="dark" className='mb-4 text-center' id='card'>
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
                                <Link className='me-3' to={`/medications`}>
                                    <button type="button" onClick={deleteMyMedication} className='btn btn-danger text-white fs-5 fw-light px-3 py-1 border border-dark rounded-3'>Delete</button>
                                </Link>
                                <Link className='ms-3' to={`/medications`}>
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
        getMedication();
    }, []);

    return (
        <>
            {medication ? loaded() : loading()}
        </>
    )
}

export default MedicationsDelete;