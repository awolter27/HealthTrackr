import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function HospitalizationsDelete() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [hospitalization, setHospitalization] = useState(null);

    const { id } = useParams();

    async function getHospitalization() {
        try {
            let myHospitalization = await fetch(`${URL}/hospitalizations/${id}`);
            myHospitalization = await myHospitalization.json();
            setHospitalization(myHospitalization);
        } catch (err) {
            console.log(err);
        }
    };

    async function deleteMyHospitalization() {
        try {
            await fetch(`${URL}/hospitalizations/${id}`, {
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
                <h1 className="text-center fs-1 fw-normal py-5 ms-sm-3">Delete Hospitalization</h1>
                <div className="d-flex justify-content-center">
                    <Card border="dark" className="text-center mb-4" id="card">
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
                                <Link className="me-3" to={`/hospitalizations`}>
                                    <button type="button" onClick={deleteMyHospitalization} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1">Delete</button>
                                </Link>
                                <Link className="ms-3" to={`/hospitalizations`}>
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
        getHospitalization();
    }, []);

    return (
        <>
            {hospitalization ? loaded() : loading()}
        </>
    );
};

export default HospitalizationsDelete;