import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

function MedicationsNew({ medications, getMedications, URL, navigate, goBack }) {
    const [medicationsForm, setMedicationsForm] = useState({
        name: "",
        dose: 0,
        unitOfMeasurement: "",
        route: "",
        frequency: "",
        reason: "N/A",
        notes: "None"
    });

    function handleChange(e) {
        setMedicationsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }));
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/medications`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(medicationsForm)
            });
            getMedications();
            navigate(`/medications`);
        } catch (err) {
            console.log(err);
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Add New Medication</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Medication <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" placeholder="Tums" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Dose <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="dose" onChange={handleChange} as="input" type="number" placeholder="1000" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Unit Of Measurement <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="unitOfMeasurement" onChange={handleChange} as="textarea" type="text" placeholder="mg" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Route <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="route" onChange={handleChange} as="textarea" type="text" placeholder="Oral" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Frequency <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="frequency" onChange={handleChange} as="textarea" type="text" placeholder="Every 8 Hours As Needed" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Reason</Form.Label>
                                <Form.Control name="reason" onChange={handleChange} as="textarea" type="text" placeholder="GERD" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="I may need to start a maintence medication." className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" className="btn btn-success border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3 mb-3">Submit</button>
                                    <button type="button" className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3 mb-3" onClick={goBack}>Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            </Container >
        );
    };

    useEffect(() => {
        getMedications();
    }, []);

    return (
        <>
            {medications ? loaded() : <Loading />}
        </>
    );
};

export default MedicationsNew;