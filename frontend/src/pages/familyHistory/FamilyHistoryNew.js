import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function FamilyHistoryNew() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const navigate = useNavigate();

    const [familyHistory, setFamilyHistory] = useState([]);

    const [familyHistoryForm, setFamilyHistoryForm] = useState({
        relationship: "",
        living: {
            living: "",
            age: 0
        },
        deceased: {
            deceased: "",
            ageAtDeath: 0
        },
        healthCondition: "",
        ageOfDiagnosis: 0,
        notes: ""
    })

    async function getFamilyHistory() {
        try {
            let myFamilyHistory = await fetch(`${URL}/familyhistory`);
            myFamilyHistory = await myFamilyHistory.json();
            setFamilyHistory(myFamilyHistory);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getFamilyHistory();
    }, []);

    function handleChange(e) {
        setFamilyHistoryForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/familyhistory`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(familyHistoryForm)
            })
            getFamilyHistory();
            navigate(`/familyhistory`);
        } catch (err) {
            console.log(err);
        }
    }

    function goBack() {
        window.history.back();
    }

    return (
        <Container fluid>
            <h1 className='fs-1 fw-normal text-center my-5'>Add New Family History</h1>
            <div className='d-flex justify-content-center mb-5'>
                <Card border="dark" className='text-center' id='card'>
                    <Form onSubmit={handleSumbit} className='mx-5'>
                        <Form.Group className="my-3">
                            <Form.Label className="fs-3 ms-3">Relationship <span className='text-danger'>*</span></Form.Label>
                            <Form.Control required name='relationship' onChange={handleChange} as="textarea" type="text" placeholder="Sister" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Living</Form.Label>
                            <Form.Control name='living.living' onChange={handleChange} as="textarea" type="text" placeholder="True" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Age</Form.Label>
                            <Form.Control name='living.age' onChange={handleChange} as="textarea" type="number" placeholder="58" className="fs-5 fw-light text-center" />
                            <Form.Text className="text-muted">* You must enter a number</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Deceased</Form.Label>
                            <Form.Control name='deceased.deceased' onChange={handleChange} as="textarea" type="text" placeholder="False" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Age At Death</Form.Label>
                            <Form.Control name='deceased.ageAtDeath' onChange={handleChange} as="textarea" type="number" placeholder="51" className="fs-5 fw-light text-center" />
                            <Form.Text className="text-muted">* You must enter a number</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3 ms-3">Health Condition <span className='text-danger'>*</span></Form.Label>
                            <Form.Control required name='healthCondition' onChange={handleChange} as="textarea" type="text" placeholder="COPD" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Age At Diagnosis</Form.Label>
                            <Form.Control name='ageOfDiagnosis' onChange={handleChange} as="textarea" type="number" placeholder="49" className="fs-5 fw-light text-center" />
                            <Form.Text className="text-muted">* You must enter a number</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Notes</Form.Label>
                            <Form.Control name='notes' onChange={handleChange} as="textarea" type="text" placeholder="She smokes 1 pack a day x30+ years." className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Actions</Form.Label>
                            <div>
                                <button type="submit" className="text-white fs-5 fw-light me-3 mb-3 px-3 py-1 rounded-3" id="new-submit-link">Submit</button>
                                <button type="button" className="text-white fs-5 fw-light ms-3 mb-3 px-3 py-1 rounded-3" id="new-cancel-link" onClick={goBack}>Cancel</button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        </Container >
    )
}

export default FamilyHistoryNew;