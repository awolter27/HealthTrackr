import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function AllergiesIndex({ allergies, getAllergies }) {
    function loaded(allergies) {
        return (
            <Container fluid>
                <Row className="justify-content-end py-5">
                    <Col sm={4} className="text-center">
                        <h1 className="fs-1 fw-normal ms-sm-3">Allergies</h1>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end pe-sm-3">
                        <Link to={"/allergies/new"}>
                            <button className="text-white rounded-3 fs-5 fw-light px-3 py-1" id="index-new-link">Add Allergy</button>
                        </Link>
                    </Col>
                </Row>
                {allergies.map((allergy, idx) => {
                    return (
                        <div key={idx} className="d-flex justify-content-center">
                            <Card border="dark" className="text-center mb-5" id="card">
                                <Card.Header className="fs-3" id="card-header">{allergy.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title className="fs-4">Reaction</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{allergy.reaction}</Card.Text>
                                    <Card.Title className="fs-4">Notes</Card.Title>
                                    <Card.Text className="fs-5 fw-light">{allergy.notes}</Card.Text>
                                    <Card.Title className="fs-4">Actions</Card.Title>
                                    <div className="d-flex justify-content-center">
                                        <Link className="me-3" to={`/allergies/${allergy._id}/edit`}>
                                            <button type="button" className="text-white rounded-3 fs-5 fw-light px-3 py-1" id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className="ms-3" to={`/allergies/${allergy._id}/delete`}>
                                            <button type="button" className="text-white rounded-3 fs-5 fw-light px-3 py-1" id="index-delete-link">Delete</button>
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
        getAllergies();
    }, []);

    return (
        <>
            {allergies.length ? loaded(allergies) : <Loading />}
        </>
    );
};

export default AllergiesIndex;