import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function HospitalizationsDelete({ getHospitalizations, URL, navigate, goBack }) {
    const { id } = useParams();

    const [hospitalization, setHospitalization] = useState(null);

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
            navigate(`/hospitalizations`);
        } catch (err) {
            console.log(err);
        }
        getHospitalizations();
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
                                <button type="button" onClick={deleteMyHospitalization} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3">Delete</button>
                                <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3">Cancel</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        );
    };

    useEffect(() => {
        getHospitalization();
    }, []);

    return (
        <>
            {hospitalization ? loaded() : <Loading />}
        </>
    );
};

export default HospitalizationsDelete;