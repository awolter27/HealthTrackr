import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function HealthConditionsIndex({ healthConditions, getHealthConditions }) {
    function loaded(healthConditions) {
        return (
            <Container fluid>
                <Row className="justify-content-end py-5">
                    <Col sm={4} className="text-center">
                        <h1 className="fs-1 fw-normal ms-sm-3">Health Conditions</h1>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end pe-sm-3">
                        <Link to={"/healthconditions/new"}>
                            <button className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-new-link">Add Health Condition</button>
                        </Link>
                    </Col>
                </Row>
                {healthConditions.map((healthCondition, idx) => {
                    return (
                        <div key={idx} className="d-flex justify-content-center">
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
                                        <Link className="me-3" to={`/healthconditions/${healthCondition._id}/edit`}>
                                            <button type="button" className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className="ms-3" to={`/healthconditions/${healthCondition._id}/delete`}>
                                            <button type="button" className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </Container>
        );
    };

    useEffect(() => {
        getHealthConditions();
    }, []);

    return (
        <>
            {healthConditions.length ? loaded(healthConditions) : <Loading />}
        </>
    );
};

export default HealthConditionsIndex;