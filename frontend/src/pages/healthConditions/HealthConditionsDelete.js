import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function HealthConditionsDelete({ getHealthConditions, URL, navigate, goBack }) {
    const { id } = useParams();

    const [healthCondition, setHealthCondition] = useState(null);

    async function getHealthCondition() {
        try {
            let myHealthCondition = await fetch(`${URL}/healthconditions/${id}`);
            myHealthCondition = await myHealthCondition.json();
            setHealthCondition(myHealthCondition);
        } catch (err) {
            console.log(err);
        }
    };

    async function deleteMyHealthConditions() {
        try {
            await fetch(`${URL}/healthconditions/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            navigate(`/healthconditions`);
        } catch (err) {
            console.log(err);
        }
        getHealthConditions();
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal py-5 ms-sm-3">Delete Health Condition</h1>
                <div className="d-flex justify-content-center">
                    <Card border="dark" className="text-center mb-5" id="card">
                        <Card.Header className="fs-3" id="card-header">{healthCondition.name}</Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4">Current</Card.Title>
                            <Card.Text className="fs-5 fw-light">{healthCondition.currentOrPast.current}</Card.Text>
                            <Card.Title className="fs-4">Past</Card.Title>
                            <Card.Text className="fs-5 fw-light">{healthCondition.currentOrPast.past}</Card.Text>
                            <Card.Title className="fs-4">Age At Diagnosis</Card.Title>
                            <Card.Text className="fs-5 fw-light">{healthCondition.ageOfDiagnosis} years old</Card.Text>
                            <Card.Title className="fs-4">Symptoms</Card.Title>
                            <Card.Text className="fs-5 fw-light">{healthCondition.symptoms}</Card.Text>
                            <Card.Title className="fs-4">Treatment</Card.Title>
                            <Card.Text className="fs-5 fw-light">{healthCondition.treatment}</Card.Text>
                            <Card.Title className="fs-4">Notes</Card.Title>
                            <Card.Text className="fs-5 fw-light">{healthCondition.notes}</Card.Text>
                            <Card.Title className="fs-4">Actions</Card.Title>
                            <div className="d-flex justify-content-center">
                                <button type="button" onClick={deleteMyHealthConditions} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3">Delete</button>
                                <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3">Cancel</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        );
    };

    useEffect(() => {
        getHealthCondition();
    }, []);

    return (
        <>
            {healthCondition ? loaded() : <Loading />}
        </>
    );
};

export default HealthConditionsDelete;