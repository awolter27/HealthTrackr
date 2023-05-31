import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function SurgeriesDelete({ getSurgeries, URL, navigate, goBack }) {
    const { id } = useParams();

    const [surgery, setSurgery] = useState(null);

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
            navigate(`/surgeries`);
        } catch (err) {
            console.log(err);
        }
        getSurgeries();
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
                                <button type="button" onClick={deleteMySurgery} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3">Delete</button>
                                <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3">Cancel</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        );
    };

    useEffect(() => {
        getSurgery();
    }, []);

    return (
        <>
            {surgery ? loaded() : <Loading />}
        </>
    );
};

export default SurgeriesDelete;