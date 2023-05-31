import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function VaccinationsIndex({ vaccinations, getVaccinations }) {
    function loaded(vaccinations) {
        return (
            <Container fluid>
                <Row className="justify-content-end py-5">
                    <Col sm={4} className="text-center">
                        <h1 className="fs-1 fw-normal ms-sm-3">Vaccinations</h1>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end pe-sm-3">
                        <Link to={"/vaccinations/new"}>
                            <button className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-new-link">Add Vaccination</button>
                        </Link>
                    </Col>
                </Row>
                {vaccinations.map((vaccination, idx) => {
                    return (
                        <div key={idx} className="d-flex justify-content-center">
                            <Card border="dark" className="text-center mb-4" id="card">
                                <Card.Header className="fs-3" id="card-header">{vaccination.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title className="fs-4">Manufacturer</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{vaccination.manufacturer}</Card.Text>
                                    <Card.Title className="fs-4">Lot Number</Card.Title>
                                    <Card.Text className="fs-5 fw-light">#{vaccination.lotNumber}</Card.Text>
                                    <Card.Title className="fs-4">Date Administered</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{vaccination.date}</Card.Text>
                                    <Card.Title className="fs-4">Notes</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{vaccination.notes}</Card.Text>
                                    <Card.Title className="fs-4">Actions</Card.Title>
                                    <div className="d-flex justify-content-center">
                                        <Link className="me-3" to={`/vaccinations/${vaccination._id}/edit`}>
                                            <button type="button" className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className="ms-3" to={`/vaccinations/${vaccination._id}/delete`}>
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
        getVaccinations();
    }, []);

    return (
        <>
            {vaccinations.length ? loaded(vaccinations) : <Loading />}
        </>
    );
};

export default VaccinationsIndex;