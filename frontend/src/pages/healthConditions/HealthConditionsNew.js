import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function HealthConditionsNew() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [healthConditions, setHealthConditions] = useState([]);

    const [healthConditionsForm, setHealthConditionsForm] = useState({
        name: "",
        currentOrPast: {
            current: "",
            past: ""
        },
        ageOfDiagnosis: "",
        symptoms: "",
        treatment: "",
        notes: ""
    })

    const navigate = useNavigate();

    async function getHealthConditions() {
        try {
            let myHealthConditions = await fetch(`${URL}/healthconditions`);
            myHealthConditions = await myHealthConditions.json();
            setHealthConditions(myHealthConditions);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        setHealthConditionsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/healthconditions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(healthConditionsForm)
            })
            getHealthConditions();
            navigate(`/healthconditions`);
        } catch (err) {
            console.log(err);
        }
    }

    function goBack() {
        window.history.back();
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal text-center my-5'>Add New Health Condition</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Health Condition <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name='name' onChange={handleChange} as="textarea" type="text" placeholder="Osteoporosis" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Current</Form.Label>
                                <Form.Control name='currentOrPast.current' onChange={handleChange} as="textarea" type="text" placeholder="True" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Past</Form.Label>
                                <Form.Control name='currentOrPast.past' onChange={handleChange} as="textarea" type="text" placeholder="False" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age At Diagnosis</Form.Label>
                                <Form.Control name='ageOfDiagnosis' onChange={handleChange} as="textarea" type="number" placeholder="52" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Symptoms</Form.Label>
                                <Form.Control name='symptoms' onChange={handleChange} as="textarea" type="text" placeholder="Kyphosis" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Treatment</Form.Label>
                                <Form.Control name='treatment' onChange={handleChange} as="textarea" type="text" placeholder="Vitamin Supplements" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name='notes' onChange={handleChange} as="textarea" type="text" placeholder="I want to discuss starting Reclast." className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" className="btn btn-success text-white fs-5 fw-light me-3 mb-3 px-3 py-1 border border-dark rounded-3">Submit</button>
                                    <button type="button" className="btn btn-secondary text-white fs-5 fw-light ms-3 mb-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            </Container >
        )
    }

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    useEffect(() => {
        getHealthConditions();
    }, []);

    return (
        <>
            {healthConditions ? loaded() : loading()}
        </>
    )
}

export default HealthConditionsNew;