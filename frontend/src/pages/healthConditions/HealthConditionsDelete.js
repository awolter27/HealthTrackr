import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function HealthConditionsDelete() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [healthCondition, setHealthConditions] = useState(null);

    const { id } = useParams();

    async function getHealthConditions() {
        try {
            let myHealthConditions = await fetch(`${URL}/healthconditions/${id}`);
            myHealthConditions = await myHealthConditions.json();
            setHealthConditions(myHealthConditions);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteMyHealthConditions() {
        try {
            await fetch(`${URL}/healthconditions/${id}`, {
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
                <h1 className='fs-1 fw-normal ms-sm-3 py-5 text-center'>Health Conditions</h1>
                <div className='d-flex justify-content-center'>
                    <Card border="dark" className='mb-5 text-center' id='card'>
                        <Card.Header className='fs-3' id='card-header'>{healthCondition.name}</Card.Header>
                        <Card.Body>
                            <Card.Title className='fs-4'>Current</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{healthCondition.currentOrPast.current}</Card.Text>
                            <Card.Title className='fs-4'>Past</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{healthCondition.currentOrPast.past}</Card.Text>
                            <Card.Title className='fs-4'>Age At Diagnosis</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{healthCondition.ageOfDiagnosis} years old</Card.Text>
                            <Card.Title className='fs-4'>Symptoms</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{healthCondition.symptoms}</Card.Text>
                            <Card.Title className='fs-4'>Treatment</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{healthCondition.treatment}</Card.Text>
                            <Card.Title className='fs-4'>Notes</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{healthCondition.notes}</Card.Text>
                            <Card.Title className='fs-4'>Actions</Card.Title>
                            <div className='d-flex justify-content-center'>
                                <Link className='me-3' to={`/healthconditions`}>
                                    <button type="button" onClick={deleteMyHealthConditions} className='btn btn-danger text-white fs-5 fw-light px-3 py-1 border border-dark rounded-3'>Delete</button>
                                </Link>
                                <Link className='ms-3' to={`/healthconditions`}>
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
        getHealthConditions();
    }, []);

    return (
        <>
            {healthCondition ? loaded() : loading()}
        </>
    )
}

export default HealthConditionsDelete;