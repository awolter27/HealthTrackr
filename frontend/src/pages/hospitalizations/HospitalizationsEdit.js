import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function HospitalizationsEdit() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [hospitalization, setHospitalization] = useState(null);

    const { id } = useParams();

    async function getHospitalization() {
        try {
            let myHospitalization = await fetch(`${URL}/hospitalizations/${id}`);
            myHospitalization = await myHospitalization.json();
            setHospitalization(myHospitalization);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        if (e.target.name === "location" && e.target.value === "") {
            setHospitalization((currentState) => ({
                ...currentState,
                location: "N/A"
            }));
        } else if (e.target.name === "notes" && e.target.value === "") {
            setHospitalization((currentState) => ({
                ...currentState,
                notes: "None"
            }));
        } else {
            setHospitalization((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value
            }));
        }
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/hospitalizations/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(hospitalization)
            });
        } catch (err) {
            console.log(err);
        }
    }

    function requiredInput() {
        if (hospitalization.name && hospitalization.dates && hospitalization.reason) {
            return true;
        } else {
            return false;
        }
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal text-center my-5'>Edit Hospitalization</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Hospital <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={hospitalization.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Address</Form.Label>
                                <Form.Control name="location" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={hospitalization.location} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Dates <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="dates" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={hospitalization.dates} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Reason <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="reason" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={hospitalization.reason} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={hospitalization.notes} />
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
        getHospitalization();
    }, []);

    return (
        <>
            {hospitalization ? loaded() : loading()}
        </>
    )
}

export default HospitalizationsEdit;