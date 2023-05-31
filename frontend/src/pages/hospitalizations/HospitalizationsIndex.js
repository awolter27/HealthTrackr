import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function HospitalizationsIndex({ hospitalizations, getHospitalizations }) {
    function loaded(hospitalizations) {
        return (
            <Container fluid>
                <Row className="justify-content-end py-5">
                    <Col sm={4} className="text-center">
                        <h1 className="fs-1 fw-normal ms-sm-3">Hospitalizations</h1>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end pe-sm-3">
                        <Link to={"/hospitalizations/new"}>
                            <button className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-new-link">Add Hospitalization</button>
                        </Link>
                    </Col>
                </Row>
                {hospitalizations.map((hospitalization, idx) => {
                    return (
                        <div key={idx} className="d-flex justify-content-center">
                            <Card border="dark" className="text-center mb-5" id="card">
                                <Card.Header className="fs-3" id="card-header">{hospitalization.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title className="fs-4">Address</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{hospitalization.location}</Card.Text>
                                    <Card.Title className="fs-4">Dates</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{hospitalization.dates}</Card.Text>
                                    <Card.Title className="fs-4">Reason</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{hospitalization.reason}</Card.Text>
                                    <Card.Title className="fs-4">Notes</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{hospitalization.notes}</Card.Text>
                                    <Card.Title className="fs-4">Actions</Card.Title>
                                    <div className="d-flex justify-content-center">
                                        <Link className="me-3" to={`/hospitalizations/${hospitalization._id}/edit`}>
                                            <button type="button" className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className="ms-3" to={`/hospitalizations/${hospitalization._id}/delete`}>
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
        getHospitalizations();
    }, []);

    return (
        <>
            {hospitalizations.length ? loaded(hospitalizations) : <Loading />}
        </>
    );
};

export default HospitalizationsIndex;