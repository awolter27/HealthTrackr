import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function FamilyHistoryEdit() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [familyHistory, setFamilyHistory] = useState(null);

    const { id } = useParams();

    async function getFamilyHistory() {
        try {
            let myFamilyHistory = await fetch(`${URL}/familyhistory/${id}`);
            myFamilyHistory = await myFamilyHistory.json();
            setFamilyHistory(myFamilyHistory);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        const nestedKeys = name.split('.');
        let updatedValue = value;
        if (name === "living.living" && value === "") {
            setFamilyHistory((currentState) => ({
                ...currentState,
                living: {
                    ...currentState.living,
                    living: "N/A"
                }
            }));
        } else if (name === "living.age" && value === "") {
            setFamilyHistory((currentState) => ({
                ...currentState,
                living: {
                    ...currentState.living,
                    age: 0
                }
            }));
        } else if (name === "deceased.deceased" && value === "") {
            setFamilyHistory((currentState) => ({
                ...currentState,
                deceased: {
                    ...currentState.deceased,
                    deceased: "N/A"
                }
            }));
        } else if (name === "deceased.ageAtDeath" && value === "") {
            setFamilyHistory((currentState) => ({
                ...currentState,
                deceased: {
                    ...currentState.deceased,
                    ageAtDeath: 0
                }
            }));
        } else if (name === "ageOfDiagnosis" && value === "") {
            setFamilyHistory((currentState) => ({
                ...currentState,
                ageOfDiagnosis: 0
            }));
        } else if (name === "notes" && value === "") {
            setFamilyHistory((currentState) => ({
                ...currentState,
                notes: "None"
            }));
        } else {
            if (nestedKeys.length > 1) {
                setFamilyHistory((currentState) => {
                    const updatedFamilyHistory = { ...currentState };
                    let currentLevel = updatedFamilyHistory;
                    for (let i = 0; i < nestedKeys.length - 1; i++) {
                        currentLevel = currentLevel[nestedKeys[i]];
                    }
                    currentLevel[nestedKeys[nestedKeys.length - 1]] = updatedValue;
                    return updatedFamilyHistory;
                });
            } else {
                setFamilyHistory((currentState) => ({
                    ...currentState,
                    [name]: updatedValue,
                }));
            }
        }
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/familyhistory/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(familyHistory)
            });
        } catch (err) {
            console.log(err);
        }
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal text-center my-5'>Edit Family History</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Relationship <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name='relationship' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={familyHistory.relationship} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Living</Form.Label>
                                <Form.Control name='living.living' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={familyHistory.living.living} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age</Form.Label>
                                <Form.Control name='living.age' onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center" value={familyHistory.living.age} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Deceased</Form.Label>
                                <Form.Control name='deceased.deceased' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={familyHistory.deceased.deceased} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age At Death</Form.Label>
                                <Form.Control name='deceased.ageAtDeath' onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center" value={familyHistory.deceased.ageAtDeath} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Health Condition <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name='healthCondition' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={familyHistory.healthCondition} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age At Diagnosis</Form.Label>
                                <Form.Control name='ageOfDiagnosis' onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center" value={familyHistory.ageOfDiagnosis} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name='notes' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={familyHistory.notes} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" className="btn btn-success text-white fs-5 fw-light me-3 mb-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Edit</button>
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
        getFamilyHistory();
    }, []);

    return (
        <>
            {familyHistory ? loaded() : loading()}
        </>
    )
}

export default FamilyHistoryEdit;