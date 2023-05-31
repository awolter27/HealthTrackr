import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function SurgeriesIndex({ surgeries, getSurgeries }) {
    function loaded(surgeries) {
        return (
            <Container fluid>
                <Row className="justify-content-end py-5">
                    <Col sm={4} className="text-center">
                        <h1 className="fs-1 fw-normal ms-sm-3">Surgeries</h1>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end pe-sm-3">
                        <Link to={"/surgeries/new"}>
                            <button className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-new-link">Add Surgery</button>
                        </Link>
                    </Col>
                </Row>
                {surgeries.map((surgery, idx) => {
                    return (
                        <div key={idx} className="d-flex justify-content-center">
                            <Card border="dark" className="text-center mb-5" id="card">
                                <Card.Header className="fs-3" id="card-header">{surgery.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title className="fs-4">Location</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{surgery.location}</Card.Text>
                                    <Card.Title className="fs-4">Date</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{surgery.date}</Card.Text>
                                    <Card.Title className="fs-4">Surgeon</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{surgery.surgeon}</Card.Text>
                                    <Card.Title className="fs-4">Reason</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{surgery.reason}</Card.Text>
                                    <Card.Title className="fs-4">Notes</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{surgery.notes}</Card.Text>
                                    <Card.Title className="fs-4">Actions</Card.Title>
                                    <div className="d-flex justify-content-center">
                                        <Link className="me-3" to={`/surgeries/${surgery._id}/edit`}>
                                            <button type="button" className="rounded-3 text-white fs-5 fw-light px-3 py-1" id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className="ms-3" to={`/surgeries/${surgery._id}/delete`}>
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
        getSurgeries();
    }, []);

    return (
        <>
            {surgeries.length ? loaded(surgeries) : <Loading />}
        </>
    );
};

export default SurgeriesIndex;