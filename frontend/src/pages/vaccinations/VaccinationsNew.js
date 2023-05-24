import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function VaccinationsNew() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [vaccinations, setVaccinations] = useState([]);

    const [vaccinationsForm, setVaccinationsForm] = useState({
        name: "",
        manufacturer: "",
        lotNumber: "",
        date: "",
        notes: ""
    })

    const navigate = useNavigate();

    async function getVaccinations() {
        try {
            let myVaccinations = await fetch(`${URL}/vaccinations`);
            myVaccinations = await myVaccinations.json();
            setVaccinations(myVaccinations);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        setVaccinationsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/vaccinations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(vaccinationsForm)
            })
            getVaccinations();
            navigate(`/vaccinations`);
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
                <h1 className='fs-1 fw-normal text-center my-5'>Add New Vaccination</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Vaccination <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" placeholder="Influenza" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Manufacturer</Form.Label>
                                <Form.Control name="manufacturer" onChange={handleChange} as="textarea" type="text" placeholder="Sanofi" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Lot Number</Form.Label>
                                <Form.Control name="lotNumber" onChange={handleChange} as="textarea" type="text" placeholder="EL0382" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Date <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="date" onChange={handleChange} as="textarea" type="text" placeholder="10/03/2021" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="Left Deltoid" className="fs-5 fw-light text-center" />
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
        getVaccinations();
    }, []);

    return (
        <>
            {vaccinations ? loaded() : loading()}
        </>
    )
}

export default VaccinationsNew;