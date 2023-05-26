import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function HospitalizationsNew() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [hospitaizations, setHospitalizations] = useState([]);

    const [hospitaizationsForm, setHospitalizationsForm] = useState({
        name: "",
        location: "N/A",
        dates: "",
        reason: "",
        notes: "None"
    })

    const navigate = useNavigate();

    async function getHospitalizations() {
        try {
            let myHospitalizations = await fetch(`${URL}/hospitaizations`);
            myHospitalizations = await myHospitalizations.json();
            setHospitalizations(myHospitalizations);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        setHospitalizationsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/hospitalizations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(hospitaizationsForm)
            })
            getHospitalizations();
            navigate(`/hospitalizations`);
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
                <h1 className='fs-1 fw-normal text-center my-5'>Add New Hospitalization</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Hospital <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" placeholder="Montville Regional Hospital" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Address</Form.Label>
                                <Form.Control name="location" onChange={handleChange} as="textarea" type="text" placeholder="962 Flynn Street" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Dates <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="dates" onChange={handleChange} as="textarea" type="text" placeholder="09/05/2018 - 09/12/2018" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Reason <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="reason" onChange={handleChange} as="textarea" type="text" placeholder="Pneumonia" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="I was treated with IV antibiotics." className="fs-5 fw-light text-center" />
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
        getHospitalizations();
    }, []);

    return (
        <>
            {hospitaizations ? loaded() : loading()}
        </>
    )
}

export default HospitalizationsNew;