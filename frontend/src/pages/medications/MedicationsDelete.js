import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function MedicationsDelete({ getMedications, URL, navigate, goBack }) {
    const { id } = useParams();

    const [medication, setMedication] = useState(null);

    async function getMedication() {
        try {
            let myMedication = await fetch(`${URL}/medications/${id}`);
            myMedication = await myMedication.json();
            setMedication(myMedication);
        } catch (err) {
            console.log(err);
        }
    };

    async function deleteMyMedication() {
        try {
            await fetch(`${URL}/medications/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            navigate(`/medications`);
        } catch (err) {
            console.log(err);
        }
        getMedications();
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal py-5 ms-sm-3">Delete Medication</h1>
                <div className="d-flex justify-content-center">
                    <Card border="dark" className="text-center mb-4" id="card">
                        <Card.Header className="fs-3" id="card-header">{medication.name}</Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4">Dose</Card.Title>
                            <Card.Text className="fs-5 fw-light">{medication.dose} {medication.unitOfMeasurement}</Card.Text>
                            <Card.Title className="fs-4">Route</Card.Title>
                            <Card.Text className="fs-5 fw-light">{medication.route}</Card.Text>
                            <Card.Title className="fs-4">Frequency</Card.Title>
                            <Card.Text className="fs-5 fw-light">{medication.frequency}</Card.Text>
                            <Card.Title className="fs-4">Reason</Card.Title>
                            <Card.Text className="fs-5 fw-light">{medication.reason}</Card.Text>
                            <Card.Title className="fs-4">Notes</Card.Title>
                            <Card.Text className="fs-5 fw-light">{medication.notes}</Card.Text>
                            <Card.Title className="fs-4">Actions</Card.Title>
                            <div className="d-flex justify-content-center">
                                <button type="button" onClick={deleteMyMedication} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3">Delete</button>
                                <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3">Cancel</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        );
    };

    useEffect(() => {
        getMedication();
    }, []);

    return (
        <>
            {medication ? loaded() : <Loading />}
        </>
    );
};

export default MedicationsDelete;