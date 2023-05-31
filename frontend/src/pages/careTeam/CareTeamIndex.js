import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CareTeamIndex({ careTeam, getCareTeam }) {
    function loaded(careTeam) {
        return (
            <Container fluid>
                <Row className="justify-content-end py-5">
                    <Col sm={4} className="text-center">
                        <h1 className="fs-1 fw-normal ms-sm-3">Care Team</h1>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end pe-sm-3">
                        <Link to={"/careteam/new"}>
                            <button className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-new-link">Add Provider</button>
                        </Link>
                    </Col>
                </Row>
                {careTeam.map((careTeam, idx) => {
                    return (
                        <div key={idx} className="d-flex justify-content-center">
                            <Card border="dark" className="text-center mb-5" id="card">
                                <Card.Header className="fs-3" id="card-header">{careTeam.title} {careTeam.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title className="fs-4">Specialty</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{careTeam.specialty}</Card.Text>
                                    <Card.Title className="fs-4">Address</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{careTeam.address}</Card.Text>
                                    <Card.Title className="fs-4">Phone Number</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{careTeam.phoneNumber}</Card.Text>
                                    <Card.Title className="fs-4">Email</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{careTeam.email}</Card.Text>
                                    <Card.Title className="fs-4">Last Appointment</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{careTeam.lastAppointment}</Card.Text>
                                    <Card.Title className="fs-4">Next Appointment</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{careTeam.nextAppointment}</Card.Text>
                                    <Card.Title className="fs-4">Notes</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{careTeam.notes}</Card.Text>
                                    <Card.Title className="fs-4">Actions</Card.Title>
                                    <div className="d-flex justify-content-center">
                                        <Link className="me-3" to={`/careteam/${careTeam._id}/edit`}>
                                            <button type="button" className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className="ms-3" to={`/careteam/${careTeam._id}/delete`}>
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
        getCareTeam();
    }, []);

    return (
        <>
            {careTeam.length ? loaded(careTeam) : <Loading />}
        </>
    );
};

export default CareTeamIndex;