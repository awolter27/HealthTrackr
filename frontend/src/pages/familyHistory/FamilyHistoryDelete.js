import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function FamilyHistoryDelete() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [familyHistory, setFamilyHistory] = useState(null);

    const { id } = useParams();

    async function getFamilyHistory() {
        try {
            let myFamilyHistory = await fetch(`${URL}/familyhistory/${id}`);
            myFamilyHistory = await myFamilyHistory.json();
            setFamilyHistory(myFamilyHistory);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteMyFamilyHistory() {
        try {
            await fetch(`${URL}/familyhistory/${id}`, {
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
                <h1 className='fs-1 fw-normal ms-sm-3 py-5 text-center'>Family History</h1>
                <div className='d-flex justify-content-center'>
                    <Card border="dark" className='mb-5 text-center' id='card'>
                        <Card.Header className='fs-3' id='card-header'>{familyHistory.relationship}</Card.Header>
                        <Card.Body>
                            <Card.Title className='fs-4'>Living</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{familyHistory.living.living}</Card.Text>
                            <Card.Title className='fs-4'>Age</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{familyHistory.living.age} years old</Card.Text>
                            <Card.Title className='fs-4'>Deceased</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{familyHistory.deceased.deceased}</Card.Text>
                            <Card.Title className='fs-4'>Age At Death</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{familyHistory.deceased.ageAtDeath} years old</Card.Text>
                            <Card.Title className='fs-4'>Health Condition</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{familyHistory.healthCondition}</Card.Text>
                            <Card.Title className='fs-4'>Age At Diagnosis</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{familyHistory.ageOfDiagnosis} years old</Card.Text>
                            <Card.Title className='fs-4'>Notes</Card.Title>
                            <Card.Text className='fs-5 fw-light'>{familyHistory.notes}</Card.Text>
                            <Card.Title className='fs-4'>Actions</Card.Title>
                            <div className='d-flex justify-content-center'>
                                <Link className='me-3' to={`/familyhistory`}>
                                    <button type="button" onClick={deleteMyFamilyHistory} className='btn btn-danger text-white fs-5 fw-light px-3 py-1 border border-dark rounded-3'>Delete</button>
                                </Link>
                                <Link className='ms-3' to={`/familyhistory`}>
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
        getFamilyHistory();
    }, []);

    return (
        <>
            {familyHistory ? loaded() : loading()}
        </>
    )
}

export default FamilyHistoryDelete;