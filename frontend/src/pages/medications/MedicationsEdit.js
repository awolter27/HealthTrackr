import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function MedicationsEdit({ getMedications, URL, navigate, goBack }) {
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

    function handleChange(e) {
        if (e.target.name === "reason" && e.target.value === "") {
            setMedication((currentState) => ({
                ...currentState,
                reason: "N/A"
            }));
        } else if (e.target.name === "notes" && e.target.value === "") {
            setMedication((currentState) => ({
                ...currentState,
                notes: "None"
            }));
        } else {
            setMedication((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value
            }));
        }
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/medications/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(medication)
            });
            navigate(`/medications`);
        } catch (err) {
            console.log(err);
        }
        getMedications();
    };

    function requiredInput() {
        if (medication.name && medication.dose && medication.unitOfMeasurement && medication.route && medication.frequency) {
            return true;
        } else {
            return false;
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Edit Medication</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Medication <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={medication.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Dose <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="dose" as="input" onChange={handleChange} type="number" className="text-center fs-5 fw-light pb-5" value={medication.dose} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Unit Of Measurement <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="unitOfMeasurement" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={medication.unitOfMeasurement} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Route <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="route" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={medication.route} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Frequency <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="frequency" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={medication.frequency} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Reason</Form.Label>
                                <Form.Control name="reason" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={medication.reason} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={medication.notes} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" disabled={!requiredInput()} className="btn btn-success border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3 mb-3">Edit</button>
                                    <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3 mb-3">Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
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

export default MedicationsEdit;