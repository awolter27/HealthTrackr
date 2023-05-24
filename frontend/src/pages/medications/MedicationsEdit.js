import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function MedicationsEdit() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [medication, setMedication] = useState(null);

    const { id } = useParams();

    async function getMedication() {
        try {
            let myMedication = await fetch(`${URL}/medications/${id}`);
            myMedication = await myMedication.json();
            setMedication(myMedication);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        setMedication((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    }

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
        } catch (err) {
            console.log(err);
        }
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal text-center my-5'>Edit Medication</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Medication <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{medication.name}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Dose <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="dose" onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center">{medication.dose}</Form.Control>
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Unit Of Measurement <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="unitOfMeasurement" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{medication.unitOfMeasurement}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Route <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="route" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{medication.route}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Frequency <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="frequency" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{medication.frequency}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Reason</Form.Label>
                                <Form.Control name="reason" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{medication.reason}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{medication.notes}</Form.Control>
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
        getMedication();
    }, []);

    return (
        <>
            {medication ? loaded() : loading()}
        </>
    )
}

export default MedicationsEdit;