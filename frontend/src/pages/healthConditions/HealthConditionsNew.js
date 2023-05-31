import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

function HealthConditionsNew({ healthConditions, getHealthConditions, URL, navigate, goBack }) {
    const [healthConditionsForm, setHealthConditionsForm] = useState({
        name: "",
        currentOrPast: {
            current: "N/A",
            past: "N/A"
        },
        ageOfDiagnosis: 0,
        symptoms: "N/A",
        treatment: "N/A",
        notes: "None"
    });

    function handleChange(e) {
        setHealthConditionsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }));
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/healthconditions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(healthConditionsForm)
            });
            getHealthConditions();
            navigate(`/healthconditions`);
        } catch (err) {
            console.log(err);
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Add New Health Condition</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Health Condition <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" placeholder="Osteoporosis" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Current</Form.Label>
                                <Form.Control name="currentOrPast.current" onChange={handleChange} as="textarea" type="text" placeholder="True" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Past</Form.Label>
                                <Form.Control name="currentOrPast.past" onChange={handleChange} as="textarea" type="text" placeholder="False" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age At Diagnosis</Form.Label>
                                <Form.Control name="ageOfDiagnosis" onChange={handleChange} as="input" type="number" placeholder="52" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Symptoms</Form.Label>
                                <Form.Control name="symptoms" onChange={handleChange} as="textarea" type="text" placeholder="Kyphosis" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Treatment</Form.Label>
                                <Form.Control name="treatment" onChange={handleChange} as="textarea" type="text" placeholder="Vitamin Supplements" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="I want to discuss starting Reclast." className="text-center fs-5 fw-light" />
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
        getHealthConditions();
    }, []);

    return (
        <>
            {healthConditions ? loaded() : <Loading />}
        </>
    );
};

export default HealthConditionsNew;