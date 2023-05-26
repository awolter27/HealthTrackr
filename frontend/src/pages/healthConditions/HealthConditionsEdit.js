import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function HealthConditionsEdit() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [healthCondition, setHealthCondition] = useState(null);

    const { id } = useParams();

    async function getHealthCondition() {
        try {
            let myHealthCondition = await fetch(`${URL}/healthconditions/${id}`);
            myHealthCondition = await myHealthCondition.json();
            setHealthCondition(myHealthCondition);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        const nestedKeys = name.split('.');
        let updatedValue = value;
        if (name === "currentOrPast.current" && value === "") {
            setHealthCondition((currentState) => ({
                ...currentState,
                currentOrPast: {
                    ...currentState.currentOrPast,
                    current: "N/A"
                }
            }));
        } else if (name === "currentOrPast.past" && value === "") {
            setHealthCondition((currentState) => ({
                ...currentState,
                currentOrPast: {
                    ...currentState.currentOrPast,
                    past: "N/A"
                }
            }));
        } else if (name === "ageOfDiagnosis" && value === "") {
            setHealthCondition((currentState) => ({
                ...currentState,
                ageOfDiagnosis: 0
            }));
        } else if (name === "symptoms" && value === "") {
            setHealthCondition((currentState) => ({
                ...currentState,
                symptoms: "N/A"
            }));
        } else if (name === "treatment" && value === "") {
            setHealthCondition((currentState) => ({
                ...currentState,
                treatment: "N/A"
            }));
        } else if (name === "notes" && value === "") {
            setHealthCondition((currentState) => ({
                ...currentState,
                notes: "None"
            }));
        } else {
            if (nestedKeys.length > 1) {
                setHealthCondition((currentState) => {
                    const updatedHealthCondition = { ...currentState };
                    let currentLevel = updatedHealthCondition;
                    for (let i = 0; i < nestedKeys.length - 1; i++) {
                        currentLevel = currentLevel[nestedKeys[i]];
                    }
                    currentLevel[nestedKeys[nestedKeys.length - 1]] = updatedValue;
                    return updatedHealthCondition;
                });
            } else {
                setHealthCondition((currentState) => ({
                    ...currentState,
                    [name]: updatedValue,
                }));
            }
        }
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/healthconditions/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(healthCondition)
            });
        } catch (err) {
            console.log(err);
        }
    }

    function requiredInput() {
        if (healthCondition.name) {
            return true;
        } else {
            return false;
        }
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal text-center my-5'>Edit Health Condition</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Health Condition <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name='name' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={healthCondition.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Current</Form.Label>
                                <Form.Control name='currentOrPast.current' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={healthCondition.currentOrPast.current} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Past</Form.Label>
                                <Form.Control name='currentOrPast.past' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={healthCondition.currentOrPast.past} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age At Diagnosis</Form.Label>
                                <Form.Control name='ageOfDiagnosis' onChange={handleChange} as="input" type="number" className="fs-5 fw-light pb-5 text-center" value={healthCondition.ageOfDiagnosis} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Symptoms</Form.Label>
                                <Form.Control name='symptoms' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={healthCondition.symptoms} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Treatment</Form.Label>
                                <Form.Control name='treatment' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={healthCondition.treatment} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name='notes' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={healthCondition.notes} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" disabled={!requiredInput()} className="btn btn-success text-white fs-5 fw-light me-3 mb-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Edit</button>
                                    <button type="button" className="btn btn-secondary text-white fs-5 fw-light ms-3 mb-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            </Container>
        )
    }

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    function goBack() {
        window.history.back();
    }

    useEffect(() => {
        getHealthCondition();
    }, []);

    return (
        <>
            {healthCondition ? loaded() : loading()}
        </>
    )
}

export default HealthConditionsEdit;