import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

function FamilyHistoryNew({ familyHistory, getFamilyHistory, URL, navigate, goBack }) {
    const [familyHistoryForm, setFamilyHistoryForm] = useState({
        relationship: "",
        living: {
            living: "N/A",
            age: 0
        },
        deceased: {
            deceased: "N/A",
            ageAtDeath: 0
        },
        healthCondition: "",
        ageOfDiagnosis: 0,
        notes: "N/A"
    });

    function handleChange(e) {
        setFamilyHistoryForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }));
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/familyhistory`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(familyHistoryForm)
            });
            getFamilyHistory();
            navigate(`/familyhistory`);
        } catch (err) {
            console.log(err);
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Add New Family History</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Relationship <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="relationship" onChange={handleChange} as="textarea" type="text" placeholder="Sister" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Living</Form.Label>
                                <Form.Control name="living.living" onChange={handleChange} as="textarea" type="text" placeholder="True" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age</Form.Label>
                                <Form.Control name="living.age" onChange={handleChange} as="input" type="number" placeholder="58" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Deceased</Form.Label>
                                <Form.Control name="deceased.deceased" onChange={handleChange} as="textarea" type="text" placeholder="False" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age At Death</Form.Label>
                                <Form.Control name="deceased.ageAtDeath" onChange={handleChange} as="input" type="number" placeholder="51" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Health Condition <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="healthCondition" onChange={handleChange} as="textarea" type="text" placeholder="COPD" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Age At Diagnosis</Form.Label>
                                <Form.Control name="ageOfDiagnosis" onChange={handleChange} as="input" type="number" placeholder="49" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="She smokes 1 pack a day x30+ years." className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" className="btn btn-success border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3 mb-3">Submit</button>
                                    <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3 mb-3">Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            </Container >
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

export default FamilyHistoryNew;