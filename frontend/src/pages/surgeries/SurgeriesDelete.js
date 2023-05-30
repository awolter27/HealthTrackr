import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function SurgeriesDelete() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [surgery, setSurgery] = useState(null);

    const { id } = useParams();

    async function getSurgery() {
        try {
            let mySurgery = await fetch(`${URL}/surgeries/${id}`);
            mySurgery = await mySurgery.json();
            setSurgery(mySurgery);
        } catch (err) {
            console.log(err);
        }
    };

    async function deleteMySurgery() {
        try {
            await fetch(`${URL}/surgeries/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal py-5 ms-sm-3">Delete Surgery</h1>
                <div className="d-flex justify-content-center">
                    <Card border="dark" className="text-center mb-4" id="card">
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
                                <Link className="me-3" to={`/surgeries`}>
                                    <button type="button" onClick={deleteMySurgery} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1">Delete</button>
                                </Link>
                                <Link className="ms-3" to={`/surgeries`}>
                                    <button type="button" className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1">Cancel</button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        );
    };

    function loading() {
        return (
            <h1>Loading...</h1>
        );
    };

    useEffect(() => {
        getSurgery();
    }, []);

    return (
        <>
            {surgery ? loaded() : loading()}
        </>
    );
};

export default SurgeriesDelete;