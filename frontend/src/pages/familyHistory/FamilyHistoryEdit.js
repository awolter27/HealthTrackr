import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function FamilyHistoryEdit({ getFamilyHistory, URL, navigate, goBack }) {
    const { id } = useParams();

    const [familyHistory, setFamilyHistory] = useState(null);

    async function getFamilyHistory() {
        try {
            let myFamilyHistory = await fetch(`${URL}/familyhistory/${id}`);
            myFamilyHistory = await myFamilyHistory.json();
            setFamilyHistory(myFamilyHistory);
        } catch (err) {
            console.log(err);
        }
    };

    function handleChange(e) {
        const { name, value } = e.target;
        const nestedKeys = name.split(".");
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
    };

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
            navigate(`/familyhistory`);
        } catch (err) {
            console.log(err);
        }
        getFamilyHistory();
    };

    function requiredInput() {
        if (familyHistory.relationship && familyHistory.healthCondition) {
            return true;
        } else {
            return false;
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Edit Family History</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Relationship <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="relationship" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={familyHistory.relationship} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Living</Form.Label>
                                <Form.Control name="living.living" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={familyHistory.living.living} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age</Form.Label>
                                <Form.Control name="living.age" onChange={handleChange} as="input" type="number" className="text-center fs-5 fw-light pb-5" value={familyHistory.living.age} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Deceased</Form.Label>
                                <Form.Control name="deceased.deceased" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={familyHistory.deceased.deceased} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age At Death</Form.Label>
                                <Form.Control name="deceased.ageAtDeath" onChange={handleChange} as="input" type="number" className="text-center fs-5 fw-light pb-5" value={familyHistory.deceased.ageAtDeath} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Health Condition <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="healthCondition" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={familyHistory.healthCondition} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age At Diagnosis</Form.Label>
                                <Form.Control name="ageOfDiagnosis" onChange={handleChange} as="input" type="number" className="text-center fs-5 fw-light pb-5" value={familyHistory.ageOfDiagnosis} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={familyHistory.notes} />
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
        getFamilyHistory();
    }, []);

    return (
        <>
            {familyHistory ? loaded() : <Loading />}
        </>
    );
};

export default FamilyHistoryEdit;